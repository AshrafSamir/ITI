#include <stdlib.h>
#define SIZE 5


void swap(int* xp, int* yp)
{
    int temp = *xp;
    *xp = *yp;
    *yp = temp;
}

void bubbleSort(int *arr, int n)
{
    int i, j;
    for (i = 0; i < n - 1; i++)
        for (j = 0; j < n - i - 1; j++)
            if (arr[j] > arr[j + 1])
                swap(&arr[j], &arr[j + 1]);
}

void printArray(int *arr, int size)
{
    int i;
    for (i = 0; i < size; i++)
        printf("%d ", arr[i]);
    printf("\n");
}

void reverse(int *arr, int size){
    for(int i=size-1;i>=0;i--){
        printf("%d",arr[i]);
        printf(" ");
    }
    printf("\n");
}

void minval(int *arr, int size){
    int min = 100;
    for(int i=0;i<size;i++){
        if(min>arr[i])min=arr[i];
    }
    printf("min = %d  \n",min);
}

void maxval(int *arr, int size){
    int max = 0;
    for(int i=0;i<size;i++){
        if(max<arr[i])max=arr[i];
    }
    printf("max = %d  \n",max);
}

void avgval(int *arr, int size){

    int sum = 0;
    for(int i=0;i<size;i++){
        sum+=arr[i];
    }
    printf("sum = %d  \n",sum);
    printf("avg = %d \n",(sum/SIZE));
}

void fillarr(int *arr_ptr, int size){
    int c;
    printf("Enter array elements: \n");
    for(int i=0;i<size;i++){
        scanf("%d", &c);
        arr_ptr[i] = c;
    }
}

void listfunctions(int *arr_ptr, int size){

    printf("\n");

    int c;
    int flag = 1;

    while(flag){
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
                fillarr(arr_ptr, size);
                break;
            case 2:
                bubbleSort(arr_ptr, size);
                printf("Sorted array: \n");
                printArray(arr_ptr, size);
                break;
            case 3:
                reverse(arr_ptr, size);
                break;
            case 4:
                avgval(arr_ptr, size);
                break;
            case 5:
                minval(arr_ptr, size);
                break;
            case 6:
                maxval(arr_ptr, size);
                break;
            case 7:
                flag=0;
                break;
            default:
                printf("wrong Input \n");


        }

    }
}

int main()
{
    int size;
    int *arr_ptr;

    printf("Enter size of array:");
    scanf("%d", &size);

    arr_ptr=(int*)malloc(size*sizeof(int));



    listfunctions(arr_ptr,size);

    return 0;
}
