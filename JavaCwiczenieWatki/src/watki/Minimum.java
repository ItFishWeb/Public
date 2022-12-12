
package watki;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;
import java.util.Random;
import java.util.Stack;



public class Minimum {
    
    private   Random rnd = new Random();
    
    //kolekcja, w której przechowywane są poszczegolne liczby
     Stack<Integer> kolekcja = new Stack<Integer>();
    
    static int min = 999999;
    
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
                        
                        //porownujemy do aktualnego minimum
                        if(x<min)
                            min = x;

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

        //tworzymy kolekcje z losowymi liczbami
        int m = 99999;
        for (int i = 0; i < 100; i++) {
            int l = rnd.nextInt(1000);
            kolekcja.add( l);
            if(l<m) //od razu szukamy jakie jest minimum
                m = l;
        }
      
        //wypisujemy jaka powinno być minimum
        System.out.println("minimum powinno wynosic = " + m);

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
        System.out.println("Minimum obliczone przez watki = " + min);


    }
}
