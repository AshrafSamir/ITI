#ifndef LINKEDLIST_H
#define LINKEDLIST_H

#include<iostream>
#include "Node.h"

using namespace std;

template<class T>
class LinkedList
{
    Node<T> *head, *tail;
    int counter;

    public:
        LinkedList()
        {
            head = tail = NULL;
            counter = 0;
        }

        void Add(T data)
        {
            //increment the counter
            counter++;

            Node<T> *node = new Node<T>(data);

            if(head == NULL)
            {
                head = tail = node;
            }
            else
            {
                tail->Next = node;
                node->Prev = tail;
                tail = node;
            }
        }

        void Display()
        {
            Node<T> *current = head;

            while(current != NULL)
            {
                cout << current->Data << "   ";
                current = current->Next;
            }
            cout<<endl;
        }

        int Search(T data)
        {
            Node<T> *node = GetNodeByData(data);

            return node != NULL;
        }

        void Remove(T data)
        {
            Node<T> *node = GetNodeByData(data);

            if(node == NULL)
                return;

            //decrement the counter
            counter--;
            if(node == head)
            {
                if(node == tail)
                {
                    head = tail = NULL;
                }
                else
                {
                    head = head->Next;
                    head->Prev = NULL;
                }
            }
            else if(node == tail)
            {
                tail = tail->Prev;
                tail->Next = NULL;
            }
            else
            {
                /*Node *A = node->Prev;
                Node *B = node->Next;

                A->Next = B;
                B->Prev = A;*/

                node->Prev->Next = node->Next;
                node->Next->Prev = node->Prev;
            }

            delete node;
        }

        int GetCount()
        {
            return counter;
        }

        int GetDataByIndex(int index)
        {


            Node<T> *current = head;

            if(index >= counter)return NULL;
            for(int i=0; i<index;i++)
            {
                current = current->Next;
            }

            return current->Data;
        }
        void InsertAfter(int data, int afterData)
        {

            Node<T> *curr = GetNodeByData(afterData);
            if(curr == NULL)return;
            //increment counter
            counter++;
            Node<T> *newNode = new Node<T>(data);

            newNode->Next = curr->Next;
            curr->Next->Prev = newNode;
            newNode->Prev = curr;
            curr->Next = newNode;

        }
        LinkedList* Reverse()
        {
            LinkedList<T> *reversedList = new LinkedList<T>;
            Node<T> *currentNormal = tail;


            for(int i=0; i<counter;i++)
            {
                reversedList->Add(currentNormal->Data);

                currentNormal = currentNormal->Prev;

            }

            return reversedList;

        }

        void InPlaceReverse()
        {
            Node<T> *current = tail;


            for(int i=0; i<counter;i++)
            {
                if(i == 0)
                {
                    current->Next = current->Prev;
                    current->Prev = NULL;
                    head = current;
                }
                else
                {
                    Node<T> *temp = new Node<T>(current->Next->Data);
                    current->Next = current->Prev;
                    current->Prev = temp;
                    tail = current;
                    if(i == (counter))tail->Next = NULL;

                }



                current = current->Next;

            }
        }

        bool removeLastNode()
        {
            if(counter == 1)
            {   counter--;
                head = tail = NULL;
                counter = 0;

                return 1;
            }
            else if(counter == 0)
            {
                return 0;
            }
            else
            {
                counter--;
                Node<T> *temp = tail;
                tail = tail->Prev;
                tail->Next = NULL;
                delete temp;


                return 1;
            }

        }

        bool removeFirstNode()
        {
            if(counter == 1)
            {
                counter--;
                head = tail = NULL;
                counter = 0;

                return 1;
            }
            else if(counter == 0)
            {
                return 0;
            }
            else
            {
                counter--;
                Node<T> *temp = head;
                head = head->Next;
                head->Prev = NULL;
                delete temp;

                return 1;
            }

        }

        void bubbleSort()
        {
            int i, j;
            for (i = 0; i < counter - 1; i++)
            {
                 Node<T> *current = head;
                for (j = 0; j < counter - i - 1; j++)
                {

                    if (current->Data > current->Next->Data)
                    {

                        T data = current->Data;
                         current->Data = current->Next->Data;
                         current->Next->Data = data;
                    }
                    current = current->Next;
                }

            }

        }
        int binarySearch(T data)
        {
            int minIndex = 0, maxIndex = counter - 1, midIndex;
            while (minIndex <= maxIndex) {

                midIndex = (minIndex + maxIndex) / 2;
                //Move Node

                if (data == GetDataByIndex(midIndex)) return midIndex;
                if (data > GetDataByIndex(midIndex)) {
                     minIndex = midIndex + 1;
                }
                else {
                    maxIndex = midIndex - 1;
                }

            }
            return -1;
        }

        void moveNodeToCurrInd(int index)
        {

        }
    protected:

    private:

        Node<T>* GetNodeByData(T data)
        {
           Node<T> *current = head;

           while(current != NULL)
           {
               if(current->Data == data)
                    return current;

               current = current->Next;
           }

           return NULL;
        }
};

#endif // LINKEDLIST_H
