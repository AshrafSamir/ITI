#include <stdio.h>
#include <stdlib.h>

int main()
{
   /* char input;
    char fullstr[21];
    for(int i=0; i<20;i++){
        input = getchar();
        if(((int)input == 10))break;
        fullstr[i] = input;

    }
    printf(fullstr);
    return 0; */
    char arr[21];
    printf("Enter char :\n");
    for(int i=0;i<20;i++)
    {

        arr[i]=getche();
        if(arr[i]==13)
            break;
    }
    printf("\n%s",arr);

    return 0;
}
