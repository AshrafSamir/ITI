#include <stdio.h>
#include <stdlib.h>


void swap_by_add(int *num1, int *num2){

    int *temp1;
    *temp1 = *num1;
    *num1 = *num2;
    *num2 = *temp1;
}

void swap_by_val(int num1, int num2){

    int temp1;
    temp1 = num1;
    num1 = num2;
    num2 = temp1;
}

int main()
{
    printf("By address \n");
    int x = 5, y =6;
    printf("x = %d , y = %d \n", x, y);
    swap_by_add(&x, &y);
    printf("x = %d , y = %d \n", x, y);

    printf("--------------- \n");
    printf("By value \n");

    int x1 = 5, y1 =6;
    printf("x = %d , y = %d \n", x1, y1);
    swap_by_val(x1, y1);
    printf("x = %d , y = %d \n", x1, y1);

    return 0;
}
