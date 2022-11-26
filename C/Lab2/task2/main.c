#include <stdio.h>
#include <stdlib.h>

int main()
{
    int input,sum =0;
    while(1){
        scanf("%d", &input);
        sum+=input;
        if(sum>100)break;
    }
    printf("total sum = %d", sum);
    return 0;
}
