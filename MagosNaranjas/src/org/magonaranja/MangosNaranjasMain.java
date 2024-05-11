package org.magonaranja;

import java.util.Scanner;

public class MangosNaranjasMain {
	public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        // Pide al usuario que introduzca el número de mangos
        System.out.println("Introduce el número de mangos:");
        int mangos = scanner.nextInt();

        // Pide al usuario que introduzca el número de naranjas
        System.out.println("Introduce el número de naranjas:");
        int naranjas = scanner.nextInt();

        // Crea un objeto de la clase MangosNaranjas con los números proporcionados
        MangosNaranjas mn = new MangosNaranjas(mangos, naranjas);
        
        // Llama al método imprimir para mostrar los resultados
        mn.imprimir();

        // Cierra el scanner para liberar recursos
        scanner.close();
    }
}

