import { useState } from "react";

const Section = ({ title, description,isVisble ,setIsVisible}) => {
  
  return (
    <div className="m-2 p-2 border border-black">
      <h2 className="text-2xl">{title}</h2>
      {isVisble ? (
        <button
          className="cursor-pointer underline"
          onClick={() => {
            setIsVisible()
          }}
        >
          Hide
        </button>
      ) : (
        <button
          className="cursor-pointer underline"
          onClick={() => {
            setIsVisible();
          }}
        >
          Show
        </button>
      )}

      {isVisble && <p>{description}</p>}
    </div>
  );
};

const instaMart = () => {
    const[sectionVisible,setSectionVisible]=useState('')

  return (
    <div className="h-screen ">
      <Section
        title={"About Section"}
        description={
          " I will give you a who that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences"
        }
        isVisble={sectionVisible==='about'}
        setIsVisible={()=>{
            if(sectionVisible==='about'){
setSectionVisible('')
            }else{
                setSectionVisible('about')
            }
        }}
      />
      <Section
        title={"Team Setion"}
        description={
          '"But I must explain or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?"'
        }
        isVisble={sectionVisible==='team'}
        setIsVisible={()=>{
            if(sectionVisible==='team'){
setSectionVisible('')
            }else{
                setSectionVisible('team')
            }
        }}
      />
      <Section
        title={"Contact Section"}
        description={
          '"On the other hand, nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains."'
        }
        isVisble={sectionVisible==='contact'}
        setIsVisible={()=>{
            if(sectionVisible==='contact'){
setSectionVisible('')
            }else{
                setSectionVisible('contact')
            }
        }}
      />
    </div>
  );
};

export default instaMart;
