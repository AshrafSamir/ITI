#include <iostream>

using namespace std;

class staack
{
private :
    int top ;
    int *ptrar;
    int sizee ;
public:
    staack()
    {
        top = 0;
        sizee=10;
        ptrar = new int[sizee];
    }
    staack(int s)
    {
        top = 0;
        sizee=s;
        ptrar = new int[sizee];
    }
    void push(int num)
    {
        if(top == this->sizee )
        {
            cout << "stack is full";
        }
        else
        {
            ptrar[top] = num;
            cout << endl << "added " << ptrar[top] << endl;
            //*ptrar++;
                      //  cout << endl << "added " << ptrar++ << endl;
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
            //*ptrar--;
            //*ptrar--;
            cout << "deleted " <<ptrar[top] << endl;
            return (ptrar[top]);

        }
    }
    void printStack()
    {
        for(int i = 0 ; i < top ; i++)
        {
            cout << ptrar[i];
                    cout << endl ;

        }
    }
    ~staack()
    {
        delete ptrar;
        cout <<endl << "destructor" << endl;
    }
} ;
int main()
{

    staack s  ;
    s.push(10);
    s.push(4);
    s.push(4);
    s.printStack();
    s.pop();
    s.pop();
    s.printStack();

    return 0;
}
