import React, {useState,useRef} from 'react'
import {motion} from 'framer-motion';

import emailJS from "@emailjs/browser";
import {styles} from '../styles';

import {EarthCanvas} from './canvas';
import SectionWrapper from "../hoc/SectionWrapper";
import { slideIn } from '../utils/motion';

const Contact = () => {
  
  const formRef = useRef();
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
})
const [loading, setLoading] = useState(false);

const handleChange = (e) => {
const {name, value} = e.target;
setForm({...form, [name]: value})

}
const handleSubmit = (e) => {
  e.preventDefault();
  setLoading(true);
  emailJS.send('service_rj7cbyc', 
  'template_cg8vt3s',
  
  {from_name: form.name,
    to_name: "Z",
    from_email: form.email,
    to_email: "yinusaamusa137@gmail.com",
    message: form.message,}
    ,
    'w1BogCyCUSfpWDX-N'
  )
  .then(()=> {
    setLoading(false);
    alert("Thanks I'll Get back to you");

    setForm({
      name:'',
      email:'',
      message: ''
    })
  },
  (error) => {
    setLoading(false)
    console.log(error)
    alert("Sorry Something went wrong")
  }
  )
}

  return (
    <div className='xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden'>
      <motion.div
      variants={slideIn('left', "tween",0.2,1)}
      className= "flex-[0.75] bg-black-100 p-8 rounded-2xl"
      >
        <p className={styles.sectionSubText}>
         Keep in Touch with Me
        </p>
        <h3 className={styles.sectionHeadText}>
            Contact
        </h3>
        <form
        onSubmit={handleSubmit}
        className= "mt-12 flex flex-col gap-8"
        ref={formRef}
        >
        <label className='flex flex-col'>
          <span className='text-white font-medium mb-4'> Name</span>
          <input  type="text" name='name' value={form.name} onChange={handleChange}
          placeholder="Your name"
          required
          className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium'/>
         
        </label>

        <label className='flex flex-col'>
          <span className='text-white font-medium mb-4'> Email</span>
          <input  type="email" name='email' value={form.email} onChange={handleChange}
          placeholder="Your email"
          required
          className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium'/>
         
        </label>

        <label className='flex flex-col'>
          <span className='text-white font-medium mb-4'> Message</span>
          <textarea rows="7"   name='message' value={form.message} onChange={handleChange}
          placeholder="Your message"
          required
          className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium'/>
         
        </label>


      <button type='submit' className='bg-tertiary py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl'>
          {loading ? "Sending...." : "Send"}
      </button>

        
        </form>
        </motion.div>
      
      <motion.div variants={slideIn('right', "tween",0.2,1)}
       className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px] "
      >
        <EarthCanvas/>
      </motion.div>
      </div>
  )
}

export default SectionWrapper(Contact, "contact")