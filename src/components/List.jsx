import React from "react";
import Navbar from "./Navbar";


const List = () => {
  const text = "သင်နှစ်သက်ရာဟင်းလျာများကို သားသက်လွတ်ဖြစ်စေ အသားဟင်းဖြစ်စေ ကြိုက်နှစ်သက်သလို ‌ရွေးချယ်ကြည့်ရှု့လိုက်ပါ။";
  return (
    <div>
        <Navbar text={text} delay={200}/>
    </div>

  );
};

export default List;
