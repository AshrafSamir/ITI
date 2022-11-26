#include <stdio.h>
#include <stdlib.h>

int main()
{
    printf("Hello world!\n");
    char input1;
    printf("Enter a char:\n");
    scanf("%c", &input1);
    printf("Char ASCII code is: %d \n", input1);
    int input2;
    printf("Enter an integer:\n");
    scanf("%d", &input2);
    printf("The hexadecimal value is: %x \n", input2);

    return 0;
}
