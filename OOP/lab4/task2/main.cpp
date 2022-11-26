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

    friend void viewcontent(Stack &s);
    static int getObjcts()
    {
        return counter;
    }

    Stack & operator=( Stack  &s);
    //Stack & operator=(int const &s);
    int  & operator[](int i);
    //int operator=(int val);

    ~Stack()
    {
        delete ptrar;
        cout << "destructor call" << endl;
    }

};

int & Stack::operator[](int i)
{
    /*int* temp = ptrar;
    for(int j=0;j<i;j++){
        temp++;
    }*/
    return ptrar[i];
}

 /* Stack & Stack::operator=(int const &s)
 {
    *this = s;
    return *this;

 } */

Stack & Stack::operator=( Stack  &s)
 {
    delete this->ptrar;
    top = s.top;
    sizeval = s.sizeval;
    ptrar = new int[sizeval];
    for(int i=0;i<sizeval;i++){
        ptrar[i] = s.ptrar[i];
    }
    return *this;
 }

/*void viewcontent(Stack s)
{
    int n = s.getTop();
    for(int i = 0 ; i < n ; i++)
    {
        cout << s.ptrar[i];
        cout << " ";
    }
    cout<< endl;
}*/

void viewcontent(Stack &s)
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

    Stack s,s2;

    s.push(1);
    s.push(2);
    s.push(3);
    s.push(4);
    s.push(5);
    s.push(6);
    Stack s1(s);

    s2 = s;
    s2.pop();

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

    cout<<"copy stack -- >";
    viewcontent(s2);
    cout<< endl;
    s2[1] = 10;
    cout<<s2[1]<<endl;

    cout << "counter = " << s.getObjcts()<<endl;
    cout<< endl;

    return 0;
}
