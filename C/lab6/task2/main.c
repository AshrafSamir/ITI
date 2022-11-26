#include <stdio.h>
#include <stdlib.h>
#define SIZE 10
// 2 3 1 7 6 10 9 8 5 4
int main()
{
    int arr[SIZE] ;
    int *parr = &arr[0];
    int sum = 0;

    printf("Fill the array: \n");

    for(int i=0; i<SIZE;i++,parr++){
        scanf("%d", parr);
    }
    parr = &arr[0];
    printf("%d \n", *parr);

    parr = &arr[0];
    printf("\n");
    printf("Print the array: \n");
    for(int i=0; i<SIZE;i++,++parr){
        printf("%d ",(*parr));
    }


    parr = &arr[0];
    printf("\n");
    printf("Sum of the array: \n");
    for(int i=0; i<SIZE;i++,++parr){
        sum+=(*parr);
    }
    printf("%d \n",sum);


    printf("\n");
    printf("Array Avg: \n");
    printf("%d \n",(sum/SIZE));

    parr = &arr[9];
    printf("\n");
    printf("Array reversed: \n");
    for(int i=SIZE-1; i>=0;i--,parr--){
        printf("%d ",(*parr));
    }
    printf("\n");

    return 0;
}
