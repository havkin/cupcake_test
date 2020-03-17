const initialStore = {
   catalog: [
      {
         "title": "Learning C++ by Building Games with Unreal Engine 4, 2nd Edition",
         "subtitle": "A beginner's guide to learning 3D game development with C++ and UE4",
         "isbn13": "9781788476249",
         "price": "44.99",
         "image": "https://itbook.store/img/books/9781788476249.png",
         "url": "https://itbook.store/books/9781788476249"
     },
     {
         "title": "Apache Kafka Quick Start Guide",
         "subtitle": "Leverage Apache Kafka 2.0 to simplify real-time data processing for distributed applications",
         "isbn13": "9781788997829",
         "price": "29.99",
         "image": "https://itbook.store/img/books/9781788997829.png",
         "url": "https://itbook.store/books/9781788997829"
     },
   ]
};

export default function catalogReducer( store = initialStore ) {
   return store;
}