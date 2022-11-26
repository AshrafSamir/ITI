#include <iostream>

using namespace std;

class staack
{
private :
    int top ;
    int arr[10];
public:
    void setTop()
    {
        top=0;
    }
    void push(int num)
    {
        if(top == 10 )
        {
            cout << "stack is full";
        }
        else
        {
            arr[top] = num;
            top++;
        }
    }
    int pop ()
    {
        if(top == 0 )
        {
            cout << "stack is empty" ;
        }
        else
        {
            top--;
            return (arr[top]);
        }
    }
    void printStack()
    {
        for(int i = 0 ; i<top ; i++)
        {
            cout << arr[i];
        }
    }
} ;
int main()
{
    staack s ;
    s.setTop();
    s.push(1);
    s.push(2);
    s.push(3);
    s.printStack();
    cout << endl ;
    cout<<s.pop();
    cout << endl ;
    s.printStack();



    return 0;
}
