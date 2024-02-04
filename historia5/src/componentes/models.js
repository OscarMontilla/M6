
export const models= [
   {
    modelo:'I',
    color:'rojo',
    matriz: [
        // Posición 1 (Vertical)
        [
            [1],
            [1],
            [1],
            [1]
        ],
        // Posición 2 (girada a la derecha)
        [
            [1, 1, 1, 1]
        ],
        // Posición 3 (vertical inversa)
        [
            [1],
            [1],
            [1],
            [1]
        ],
        // Posición 4 (horizontal  izq)
        [
            [1, 1, 1, 1]
        ]
    ]


   },

   {
    modelo:'L',
    color:'Amarillo',
    matriz: [
        // Posición 1 (vertical)
        [
            [1, 0],
            [1, 0],
            [1, 1]
        ],
        // Posición 2 (girada a la derecha)
        [
            [1, 1, 1],
            [1, 0, 0]
        ],
        // Posición 3 (vertical inversa)
        [
            [1, 1],
            [0, 1],
            [0, 1]
        ],
        // Posición 4 (horizontal  izq)
        [
            [0, 0, 1],
            [1, 1, 1]
        ]
    ]


   },

   {

    modelo:'Cuadrado',
    color:'Azul',
    matriz: [
        // Posición 1 (vertical)
        [
            [1, 1],
            [1, 1]
           
        ],
        // Posición 2 (girada a la derecha)
        [
            [1, 1],
            [1, 1]
        ],
        // Posición 3 (vertical inversa)
        [
            [1, 1],
            [1, 1]
            
        ],
        // Posición 4 (horizontal  izq)
        [
            [1, 1],
            [1, 1]
        ]
    ]
   


   },
   {
    modelo:'L inversa',
    color:'',
    matriz: [
        // Posición 1 (vertical)
        [
            [0, 1],
            [0, 1],
            [1, 1]
        ],
        // Posición 2 (girada a la derecha)
        [
            [1, 0, 0],
            [1, 1, 1]
        ],
        // Posición 3 (vertical inversa)
        [
            [1, 1],
            [1, 0],
            [1, 0]
        ],
        // Posición 4 (horizontal  izq)
        [
            [1, 1, 1],
            [0, 0, 1]
        ]
    ]


   },

   {
    modelo:'T',
    color:'',
    matriz: [
        // Posición 1 (vertical)
        [
            [1, 1, 1],
            [0, 1, 0]
        ],
        // Posición 2 (girada a la derecha)
        [
            [ 0 , 1 ],
            [ 1 , 1 ],
            [ 0 , 1 ]
        ],
        // Posición 3 (vertical inversa)
        [
            [ 0 , 1 , 0 ],
            [ 1 , 1 , 1 ]
        ],
        // Posición 4 (horizontal  izq)
        [
            [ 1 , 0 ],
            [ 1 , 1 ],
            [ 1 , 0 ]
        ]
    ]


   },

   {
    modelo:'Z',
    color:'',
    matriz:[
        // Posición 1 (vertical)
        [
            [0, 1, 1],
            [1, 1, 0]
        ],
        // Posición 2 (girada a la derecha)
        [
            [ 1 , 0 ],
            [ 1 , 1 ],
            [ 0 , 1 ]
        ],
        // Posición 3 (vertical inversa)
        [
            [ 0 , 1 , 1 ],
            [ 1 , 1 , 0 ]
        ],
        // Posición 4 (horizontal  izq)
        [
            [ 1 , 0 ],
            [ 1 , 1 ],
            [ 0 , 1 ]
        ]
    ]

    
            


   },

   {
    modelo:'Z inversa',
    color:'',
    matriz: [
        // Posición 1 (vertical)
        [
            [ 1 , 1 , 0 ],
            [ 0 , 1 , 1 ]
        ],
        // Posición 2 (girada a la derecha)
        [
            [ 0 , 1 ],
            [ 1 , 1 ],
            [ 1 , 0 ]
        ],
        // Posición 3 (vertical inversa)
        [
            [ 1 , 1 , 0 ],
            [ 0 , 1 , 1 ]
        ],
        // Posición 4 (horizontal  izq)
        [
            [ 0 , 1 ],
            [ 1 , 1 ],
            [ 1 , 0 ]
        ]
    ]


   }
   
    





    
]