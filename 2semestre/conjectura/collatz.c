#include<stdio.h>
void main(){
	int x, cont = 0;
	printf("Digite um número inteiro positivo\n");
	scanf("%d", &x);
	do{
		if(x & 2 == 0){
			x = x / 2;
		}else{
			x = x * 3 + 1;
		}
		printf("%d\n", x);
		cont++;
	}while(x != 1);
	printf("Foram %d passos.", cont); 
	getch();
}