#include <stdio.h>
#include <stdlib.h>
#include <windows.h>
#define SIZE 2

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
    for(int i=0;i<SIZE;i++){

        gotoxy(10,0);
        printf("Employee %d",i);

        gotoxy(0,5);
        printf("Code:",i);
        scanf("%d",&emps[i].code);


        gotoxy(20,5);
        printf("Age:",i);
        scanf("%d",&emps[i].age);

        gotoxy(0,10);
        printf("Fname:",i);
        scanf("%s",temp1);
        strcpy(emps[i].name.fname,temp1);

        gotoxy(20,10);
        printf("Lname:",i);
        scanf("%s",temp2);
        strcpy(emps[i].name.lname,temp2);

        gotoxy(0,15);
        printf("Sal:",i);
        scanf("%d",&emps[i].salary);

        gotoxy(20,15);
        printf("Bonus:",i);
        scanf("%d",&emps[i].bonus);

        gotoxy(0,20);
        printf("Tax:",i);
        scanf("%d",&emps[i].tax);

        gotoxy(5,25);
        printf("NEXT>>",i);

        system("cls");
        //getch();
    }

    for(int i=0;i<SIZE;i++){
        gotoxy(10,0);
        printf("Employee %d",i);

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

    return 0;
}
