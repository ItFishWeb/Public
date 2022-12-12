
package watki;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;
import java.util.Random;
import java.util.Stack;


public class Suma {
    
    private   Random rnd = new Random();
    
    //kolekcja, w której przechowywane są poszczegolne liczby do sumowania
   
     Stack<Integer> kolekcja = new Stack<Integer>();
     
   // BST kolekcja = new BST();
    
    static int suma = 0;
    
    public  Thread nowyWatek(int num)
    {
        
        Thread t = new Thread(() -> {
            System.out.println("Watek " + num + " startuje");
        
            while (true) {
              
                //czekamy jesli inny watek w tym samym czasie ma dostep do naszej kolekcji
                synchronized (kolekcja) {
                  
                    Iterator<Integer> itr = kolekcja.iterator();
                    
                    //sprawdzamy czy kolekcja jest pusta
                    if(itr.hasNext()){
                        int x = itr.next(); //pobieramy kolejny element z kolekcji
                        itr.remove(); //usuwamy element
                        //zwiekszamy sume
                        suma +=x;

                        System.out.println("Watek " + num + " pobiera element " + x);

                    }
                    else//jesli jest pusta do wychodzimy z petli
                        break;
                   
                      
                }
                
                try {
                       int los = rnd.nextInt(300);
                       System.out.println("Watek " + num + " czeka " + los + " milisekund");
                       
                       //poczekaj losowa ilosc milisekund
                       Thread.sleep(los);

                } 
                catch (InterruptedException e) {
                       throw new RuntimeException(e);
                }

            }
            
            System.out.println("Watek " + num + " konczy");

        });
        
        t.start();
        return t;
    }
    
    
    ////////////////////////////////////////////////////////////////////////////
    
    
    
    
    public  void obliczenia() {

        //tworzymy kolekcje z elementami do sumowania
        int s = 0;
        for (int i = 0; i < 100; i++) {
            kolekcja.add( i*2);
            s +=i*2;
        }
      
        //wypisujemy jaka powinna być suma
        System.out.println("Suma do obliczenia = " + s);

        //lista do przechowywania watkow
        List<Thread> threads = new ArrayList();
          
        //tworzymy watki
        int liczbaWatkow = 5;
        for (int i = 0; i < liczbaWatkow; i++) {
            Thread t = nowyWatek(i);
            threads.add(t);
        }

        //przechodzimy przez liste watkow i czekamy az wszystkie sie zakonczą
        for(int i=0;i<threads.size();i++)
        {
            try{
            threads.get(i).join();
            }
            catch(Exception e)
            {
            }
        }
        
        //wypisujemy wynik sumowania przez watki
        System.out.println("Suma obliczona przez watki = " + suma);


    }
}
