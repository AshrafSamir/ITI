#ifndef QUEUE_H
#define QUEUE_H

#include<iostream>
#include "LinkedList.h"

template<class T>
class Queue
{
    LinkedList<T> *myList;
    public:

        Queue()
        {
            myList = new LinkedList<T>;
        }

        void enQueue(T data)
        {
            myList->Add(data);
        }

        bool deQueue(T &data)
        {
            if(myList->GetCount() == 0)return 0;
            data = myList->GetDataByIndex(0);
            myList->removeFirstNode();
            return 1;


        }

        T peek()
        {
            if(myList->GetCount() == 0)return NULL;
            return myList->GetDataByIndex(0);
        }

        void display()
        {
            myList->Display();
        }

    protected:


};

#endif // QUEUE_H
