#include <iostream>

using namespace std;
template <class T>

class Stack{

    int top;
    int sizee;
    T *ptr;
    static int counter;

public:
    Stack(){
        top = 0;
        sizee = 10;
        ptr = new T[sizee];
        counter++;
    }
    Stack(int n){
        top = 0;
        sizee = n;
        ptr = new T[sizee];
        counter++;
    }
    Stack(Stack &mys){
        top = mys.top;
        sizee = mys.sizee;

        for(int i=0; i<top; i++){
            ptr[i] = mys.ptr[i];
        }
        counter++;
    }

    static getCounter(){
        return counter;
    }

    int getTop(){
        return this->top;
    }

    void push(T);
    T pop();

    Stack & operator=(Stack &);

    //friend void viewContent(Stack<T>);

    ~Stack(){
        delete []ptr;
        counter--;
    }


};

template <class T>
void Stack<T>:: push(T n){

    if(top==sizee){
        cout << "Stack is full";

    }else{
        ptr[top] = n;
        top++;
    }
}

template <class T>
T Stack<T>:: pop(){

    T returnVal;

    if(top==0){
        cout << "Stack is empty";

    }else{
        top--;
        returnVal = ptr[top];
    }
    return returnVal;
}

template <class T>
Stack<T>& Stack<T>::operator=(Stack<T> &mys){

    delete []ptr;
    top = mys.top;
    sizee = mys.sizee;

    ptr = new T[sizee];
    for(int i=0; i< sizee; i++){
        ptr[i] = mys.ptr[i];
    }
    return *this;

}
template <class T>
void viewContent(Stack<T> mys){

    int n = mys.getTop();
    for(int i=0; i<n;i++){
        cout << mys.pop()<<endl;
    }

}


template <class T>
int Stack <T>:: counter =0;

int main(){

    Stack<int> s1(5), s2;

    s1.push(10);
    s1.push(20);
    s1.push(11);

    cout << "stack 1: ";
    //viewContent(s1);
    cout << s1.pop() << endl;

    Stack<char> mys;
    mys.push('A');
    mys.push('B');


    cout << "stack 2 :";
    cout << mys.pop() << endl;
    //cout << Stack<char>::getCounter() << endl;

    return 0;
}


