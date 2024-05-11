package org.magonaranja;

public class MangosNaranjas {
	
	 private int mangos;
	    private int naranjas;

	    // Constructor de la clase MangosNaranjas
	    public MangosNaranjas(int mangos, int naranjas) {
	        // Inicializa los atributos mangos y naranjas con los valores proporcionados
	        this.mangos = mangos;
	        this.naranjas = naranjas;
	    }

	    // Método para imprimir el resultado
	    public void imprimir() {
	        // Calcula el número máximo de cajas que se pueden formar
	        int cajasMangos = mangos / calcularMaximoComunDivisor(mangos, naranjas);
	        int cajasNaranjas = naranjas / calcularMaximoComunDivisor(mangos, naranjas);

	        // Imprime el número de cajas, mangos por caja y naranjas por caja
	        System.out.println("El número de cajas es: " + Math.min(cajasMangos, cajasNaranjas));
	        System.out.println("El número de mangos en una caja es: " + (mangos / Math.min(cajasMangos, cajasNaranjas)));
	        System.out.println("El número de naranjas en una caja es: " + (naranjas / Math.min(cajasMangos, cajasNaranjas)));
	    }

	    // Método para calcular el máximo común divisor
	    private int calcularMaximoComunDivisor(int a, int b) {
	        while (b != 0) {
	            int temp = b;
	            b = a % b;
	            a = temp;
	        }
	        return a;
	    }
	}


