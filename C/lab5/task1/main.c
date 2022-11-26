#include <stdio.h>
#include <stdlib.h>
#define SIZE 5

void swap(int* xp, int* yp)
{
    int temp = *xp;
    *xp = *yp;
    *yp = temp;
}


void bubbleSort(int arr[], int n)
{
    int i, j;
    for (i = 0; i < n - 1; i++)
        for (j = 0; j < n - i - 1; j++)
            if (arr[j] > arr[j + 1])
                swap(&arr[j], &arr[j + 1]);
}

void printArray(int arr[], int size)
{
    int i;
    for (i = 0; i < size; i++)
        printf("%d ", arr[i]);
    printf("\n");
}

void listfunctions(){
    int c;
    int arr[SIZE];
    int sum = 0;
    int min = 100;
    int max = 0;
    while(1){
        printf("1- Fill: \n");
        printf("2- Sort: \n");
        printf("3- Print Reversed: \n");
        printf("4- Sum & Avg: \n");
        printf("5- Min Val: \n");
        printf("6- Max Val: \n");
        printf("7- Exit: \n");


        printf("Your Input: \n");
        scanf("%d", &c);

        switch(c){
            case 1:
                printf("Enter array elements: \n");
                for(int i=0;i<SIZE;i++){
                    scanf("%d", &c);
                    arr[i] = c;
                }
                break;
            case 2:
                bubbleSort(arr, SIZE);
                printf("Sorted array: \n");
                printArray(arr, SIZE);
                break;
            case 3:
                for(int i=SIZE-1;i>=0;i--){
                    printf("%d",arr[i]);

                }
                scanf("%d", &c);
                break;
            case 4:
                for(int i=0;i<SIZE;i++){
                    sum+=arr[i];
                }
                printf("sum = %d  \n",sum);
                printf("avg = %d \n",(sum/SIZE));
                break;
            case 5:
                for(int i=0;i<SIZE;i++){
                    if(min>arr[i])min=arr[i];
                }
                printf("min = %d  \n",min);
                break;
            case 6:
                for(int i=0;i<SIZE;i++){
                    if(max<arr[i])max=arr[i];
                }
                printf("max = %d  \n",max);

                break;
            case 7:
                return 0;
            default:
                printf("wrong Input \n");


        }

    }
}


int main()
{

    listfunctions();

    return 0;
}
