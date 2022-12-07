#ifndef STACK_H
#define STACK_H

#include<iostream>
#include "LinkedList.h"
template<class T>
class Stack
{
    LinkedList<T> *myList;
    public:

        Stack()
        {
            myList = new LinkedList<T>;
        }

        void add(T data)
        {
            myList->Add(data);
        }

        T pop()
        {
            if(myList->GetCount() == 0)return NULL;
            T temp = myList->GetDataByIndex(myList->GetCount()-1);
            myList->removeLastNode();
            return temp;


        }

        T peek()
        {
            if(myList->GetCount() == 0)return NULL;
            return myList->GetDataByIndex(myList->GetCount()-1);
        }

        void display()
        {
            myList->Display();
        }




    protected:



};

#endif // STACK_H
