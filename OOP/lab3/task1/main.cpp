#include <iostream>

using namespace std;

class Stack
{

    int top ;
    int *ptrar;
    int sizeval ;
    int static counter;

public:
    Stack()
    {
        top = 0;
        sizeval=10;
        counter++;
        ptrar = new int[sizeval];
    }
    Stack(int s)
    {
        top = 0;
        sizeval=10;
        counter++;
        ptrar = new int[sizeval];
    }

    Stack(Stack &s)
    {
        this->top = s.top;
        this->sizeval = s.sizeval;
        this->ptrar = new int[s.sizeval];
        counter++;
        for(int i = 0 ; i<this->top ; i++)
        {
            this->ptrar[i] = s.ptrar[i];
        }
    }
    void push(int num)
    {
        if(top == this->sizeval )
        {
            cout << "no more space" << endl;
        }
        else
        {
            ptrar[top] = num;
            cout << "adding " << ptrar[top] << endl;
            top++;
        }
    }
    int pop ()
    {
        if(top == 0)
        {
            cout << "no elements" << endl;
        }
        else
        {
            top--;

            cout << "deleting " <<ptrar[top] << endl;
            return (ptrar[top]);

        }

    }
    int getTop()
    {
        return this->top;
    }

    friend void viewcontent(Stack s);
    static int getObjcts()
    {
        return counter;
    }
    ~Stack()
    {
        delete ptrar;
        cout << "destructor call" << endl;
    }

} ;


/*void viewcontent(Stack &s)
{
    int n = s.getTop();
    for(int i = 0 ; i < n ; i++)
    {
        cout << s.ptrar[i];
        cout << " ";
    }
    cout<< endl;
}*/
void viewcontent(Stack s)
{
    int n = s.getTop();
    for(int i = 0 ; i < n ; i++)
    {
        cout << s.ptrar[i];
        cout << " ";
    }
    cout<< endl;
}
int Stack::counter=0 ;

int main()
{

    Stack s;

    s.push(1);
    s.push(2);
    s.push(3);
    s.push(4);
    s.push(5);
    s.push(6);
    Stack s1(s);
    cout<< endl;

    viewcontent(s);
    cout<< endl;

    s.pop();
    cout<< endl;

    viewcontent(s);
    cout<< endl;

    cout<<"copy stack -- >";
    viewcontent(s1);
    cout<< endl;

    cout << "counter = " << s.getObjcts()<<endl;
    cout<< endl;

    return 0;
}
