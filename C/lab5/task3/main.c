#include <stdio.h>
#include <stdlib.h>


int powerofn(int base, int p){

    if(p == 0)return 1;
    return powerofn(base, p-1)*base;

}

void decimalToBinary(int num) {
    if (num == 0) {
        printf("0");
        return;
    }

   int binaryNum[32];
   int i=0;

   for ( ;num > 0; ){
      binaryNum[i++] = num % 2;
      num /= 2;
   }

   for (int j = i-1; j >= 0; j--)
      printf("%d", binaryNum[j]);
}
int main()
{
    printf("%d \n",powerofn(2,3));

    decimalToBinary(10);
    return 0;
}
