#include <stdio.h>
#include <stdlib.h>

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

int main()
{
    int marks[5][4];
    int g;
    int total[5]={0};
    int totalsorted[5]={0};
    int avgC[4];


    for(int i=0; i<5; i++){
        for(int j=0; j<4; j++){
            printf("Enter Student %d mark: \n",i);
            scanf("%d", &g);
            marks[i][j] = g;
            total[i]+= marks[i][j];
            totalsorted[i] += marks[i][j];
        }
    }
    for(int i=0;i<4;i++){
        for(int j=0;j<5;j++)
        avgC[i] = marks[i][j] / 5;
    }
    for(int i=0;i<4;i++){
        printf("Avg course %d = %d \n", i, avgC[i]);
    }
    for(int i=0;i<5;i++){
        if(total[i] >= 90)printf("student %d total = %d and grade is A \n", i, total[i]);
        else if(total[i] >= 80)printf("student %d total = %d and grade is B \n", i, total[i]);
        else if(total[i] >= 60)printf("student %d total = %d and grade is C \n", i, total[i]);
        else if(total[i] >= 50)printf("student %d total = %d and grade is D \n", i, total[i]);
        else if(total[i] < 50)printf("student %d total = %d and grade is F \n", i, total[i]);

    }



    bubbleSort(totalsorted, 5);


    for(int i = 0 ; i<5 ;  i++)
    {
        for(int j = 0 ; j<5 ;  j++)
    {
        if( totalsorted[i] == total[j])
        {
            printf(" student %d grade = %d \n" ,j, totalsorted[i]);

        }
    }
    }


    return 0;
}
