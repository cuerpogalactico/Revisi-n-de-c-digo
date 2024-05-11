package com.generation;

import java.util.Scanner;

public class Codigo4 {
	 public static void main(String[] args) {
	        Scanner s = new Scanner(System.in); // Corregimos la inicialización del Scanner
	        
	        System.out.print("Turno del jugador 1 (introduzca piedra, papel o tijeras): ");
	        String j1 = s.nextLine();
	        
	        System.out.print("Turno del jugador 2 (introduzca piedra, papel o tijeras): "); // Ponemos al jugador dos
	        Scanner s2 = new Scanner(System.in); // Corregimos la inicialización del segundo Scanner
	        String j2 = s2.nextLine(); // Utilizamos el segundo Scanner para leer la entrada del jugador 2
	        
	        if (j1.equals(j2)) { // Corregimos la comparación de cadenas usando equals()
	            System.out.println("Empate");
	        } else {
	            int g = 2;
	            switch(j1) {
	                case "piedra":
	                    if (j2.equals("tijeras")) { // Corregimos la comparación de cadenas usando equals()
	                        g = 1;
	                    }
	                    break; // Agregamos break para separar los casos
	                    
	                case "papel":
	                    if (j2.equals("piedra")) { // Corregimos la comparación de cadenas usando equals()
	                        g = 1;
	                    }
	                    break; // Agregamos break para separar los casos
	                    
	                case "tijeras": // Corregimos la palabra "tijera" a "tijeras"
	                    if (j2.equals("papel")) { // Corregimos la comparación de cadenas usando equals()
	                        g = 1;
	                    }
	                    break; // Agregamos break para separar los casos
	                    
	                default:
	            }
	            System.out.println("Gana el jugador " + g);
	        }
	        s.close(); //llamamos al método close para cerrar los scanners
	        s2.close();
	    }
	}