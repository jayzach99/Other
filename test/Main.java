import java.lang.reflect.Field;

public class Main {
    public static void main(String[] args) throws Exception {
        Class cache = Integer.class.getDeclaredClasses()[0];
        Field c = cache.getDeclaredField("cache");
        c.setAccessible(true);
        Integer[] array = (Integer[]) c.get(cache);
        
        System.out.println(array[130]); 	
        
        array[132] = array[133];
        System.out.printf("%d%n",2 + 2); 
    }   
}