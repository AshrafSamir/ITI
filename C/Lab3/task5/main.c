#include <stdio.h>
#include <stdlib.h>

int main()
{
    char fullname[21] = "ashraf samer";
    int counter = 0;
    int i=0;
    for( ;fullname[i]!='\0';i++);
    printf("size  =  %d",i);

    return 0;
}
