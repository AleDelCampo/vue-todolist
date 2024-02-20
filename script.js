/*Descrizione:
DONE:
(true = è stata fatta)
(false = da fare)
Bonus:
1- oltre al click sul pulsante per la aggiunta del task, 
intercettare anche il tasto ENTER per aggiungere il todo alla 
lista
2- cliccando sul testo dell'item, invertire il valore della 
proprietà done del todo corrispondente (se done era uguale 
a false, impostare true e viceversa)*/
const { createApp } = Vue;
createApp({
    data() {
        return {
            missedToDo: '',

            toDoList: [
                {
                    text: 'Comprare farina',
                    done: 'true',
                }, 
                {
                    text: 'Comprare acqua',
                    done: 'true',
                }, 
                {
                    text: 'Comprare lievito',
                    done: 'false',
                },
                {
                    text: 'Fare il pane',
                    done: 'false',
                },
            ],
        }
    },

    methods: {
        deleteToDo(toDoIndex) {
            this.toDoList.splice(toDoIndex, 1);
        },

        addToDo() {
            this.toDoList.push(
                {
                text: this.missedToDo,
                done: 'false'
            });
            
            this.missedToDo = '';
        },
    },
}).mount("#app");


