#include <stdio.h>
#include <stdlib.h>
#include <windows.h>
#define SIZE 10

void gotoxy( int column, int line )
  {
  COORD coord;
  coord.X = column;
  coord.Y = line;
  SetConsoleCursorPosition(
    GetStdHandle( STD_OUTPUT_HANDLE ),
    coord
    );
  }

struct fullname
{
    char fname[11],lname[11];
};
struct employee
{
    struct fullname name;
    int code,age,salary,tax,bonus;
};

int main()
{
    char temp1[11];
    char temp2[11];
    struct employee emps[SIZE];
    int ind=1;
    int indexes[SIZE]={0};
    int flag = 1;


    while(flag!=0){

        printf("Enter index: \n");
        scanf("%d",&ind);

        if(ind==0)flag=0;
        if(flag != 0){
            if(ind!=0)indexes[ind-1]=1;

            gotoxy(10,2);
            printf("Employee %d",ind);

            gotoxy(0,5);
            printf("Code:");
            scanf("%d",&emps[ind-1].code);


            gotoxy(20,5);
            printf("Age:");
            scanf("%d",&emps[ind-1].age);

            gotoxy(0,10);
            printf("Fname:");
            scanf("%s",temp1);
            strcpy(emps[ind-1].name.fname,temp1);

            gotoxy(20,10);
            printf("Lname:");
            scanf("%s",temp2);
            strcpy(emps[ind-1].name.lname,temp2);

            gotoxy(0,15);
            printf("Sal:");
            scanf("%d",&emps[ind-1].salary);

            gotoxy(20,15);
            printf("Bonus:");
            scanf("%d",&emps[ind-1].bonus);

            gotoxy(0,20);
            printf("Tax:");
            scanf("%d",&emps[ind-1].tax);

            gotoxy(5,25);
            printf("NEXT>>");

            system("cls");
        }

        //getch();
    }

    for(int i=0;i<SIZE;i++){

        if(indexes[i]!=0){
            gotoxy(10,2);
            printf("Employee %d",i+1);

            gotoxy(0,5);
            printf("Code: %d",emps[i].code);

            gotoxy(20,5);
            printf("Age: %d",emps[i].age);

            gotoxy(0,10);
            printf("Name: %s %s",emps[i].name.fname,emps[i].name.lname);


            gotoxy(20,10);
            printf("Net Salary: %d",(emps[i].salary + emps[i].bonus) - emps[i].tax);

            getch();

        }
    }

    return 0;
}
