#include <stdio.h>
#include <stdlib.h>

int main()
{
    char key ;
    int x=1 ;
    int students, size;

    printf("Enter num of students:");
    scanf("%d",&students);
    printf("\n");
    printf("Enter size of string:");
    scanf("%d",&size);
    printf("\n");
    system("cls");

    char **ptr_lines = (char**)malloc(students*sizeof(char*));

    for(int i=0; i<students; i++)
    {
        ptr_lines[i] = (char*)malloc(size*sizeof(char));
        printf("Enter student %d :",i);
        scanf("%s", ptr_lines[i]);

    }

    system("cls");
    for(int i=0; i<students; i++)
    {
        printf("student %d name is: %s \n",i,ptr_lines[i]);


    }

    return 0;
}
