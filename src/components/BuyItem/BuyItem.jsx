import React from 'react';

class BuyItemModal extends React.Component {

   render() {
      return (
         <div className="modal-overlay">
            <div className="modal">
               <header className="modal-header">
                  <h3>Title</h3>
                  <button>Back</button>
               </header>

               <div className="modal-content">
                  <img 
                     src="https://itbook.store/img/books/9781788476249.png"
                     alt="item image"
                  />
                  <div className="modal-content__info">
                     <p>Subtitle</p>
                     <p>Price</p>
                     <p>
                        Extra info:
                         <a href="">https://itbook.store/books/9781788997829</a>
                     </p>
                  </div>
               </div>
               <footer className="modal-footer">
                  <div>
                     <button>minus</button>
                     <span>counter</span>
                     <button>plus</button>
                  </div>
                  <button>Buy</button>
               </footer>
            </div>
         </div>
      );
   }
}

export default BuyItemModal;