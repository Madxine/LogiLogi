import React from 'react'


const onClick = () => {

};

const List = () => {
  return (
    <div>
       <ul className='list-none hover:list-disc'>
            <li>Rice<input/><button>+</button><button>-</button><button>Update</button></li>
            <li>Oil<input/><button>+</button><button>-</button><button>Update</button></li>
            <li>...<input/><button>+</button><button>-</button><button>Update</button></li>
        </ul>
    </div>
  )
}

export default List