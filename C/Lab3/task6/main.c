#include <stdio.h>
#include <stdlib.h>

int main()
{
    char sent [3][10] = { {"asdas"}, {"asddd"}, {"asdaa"}};
    char word [] = {"as"};
    int counter = 0 ;

    for(int i = 0 ; i<3 ; i++)
    {
        if (strstr(sent[i], word) != NULL)
        {
            //puts(sent[i]);
            counter ++ ;
        }
    }
    printf("%d" , counter);
    return 0;
}
