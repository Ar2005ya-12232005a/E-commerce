import React from 'react'
import Title from "../components/Title"
import {assets} from "../assets/assets"
import NewsletterBox from "../components/NewsletterBox"

const About = () => {
  return (
    <div>
      <div className = "text-2xl text-center pt-8 border-t">
        <Title text1={"ABOUT"} text2={"US"}/>
      </div>

      <div className="my-10 flex flex-col md:flex-row gap-16">
        <img className="w-full md:max-w-[450px]" src= {assets.about_img} alt="" />
        <div className = "flex flex-col justify-center gap-6 md:w-2/4 text-gray-600">
        <p>Forever is a modern and trend-forward clothing website that brings style, comfort, and affordability together in one place. It offers a wide range of fashion collections for different occasions, including casual wear, formal outfits, seasonal trends, and everyday essentials. The website is designed with a clean and user-friendly interface, making it easy for customers to explore categories, view product details, and shop seamlessly. With high-quality fabrics and carefully curated designs, Forever focuses on delivering both elegance and durability in every piece.</p>

        <p>What makes Forever stand out is its commitment to providing a smooth online shopping experience combined with the latest fashion trends. The platform regularly updates its collections to match current styles while maintaining timeless wardrobe staples. Forever is not just a clothing website—it is a destination for individuals who want to express their personality and confidence through fashion.</p>

        <b className="text-gray-800">Our Mission</b>
        <p>Our mission at Forever is to empower individuals to express themselves confidently through fashion that is stylish, accessible, and meaningful. By focusing on innovation, inclusivity, and customer satisfaction, we aim to make fashion a seamless and enjoyable experience for everyone.</p>

        </div>

      </div>


      <div className="text-xl py-4">
        <Title text1={"WHY"} text2={"CHOOSE US"}/>

      </div>

      <div className="flex flex-col md:flex-row text-sm mb-20">
        <div className="border border-gray-500 px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Quality Assurance:</b>
          <p className = "text-gray-600">We ensure strict quality assurance at every stage, from fabric selection to final inspection, to deliver durable, comfortable, and perfectly crafted products to our customers.</p>

        </div>

        <div className="border border-gray-500 px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Convenience:</b>
          <p className = "text-gray-600">We prioritize convenience by offering a seamless browsing experience, easy navigation, secure payments, and fast delivery to make shopping simple and stress-free.</p>

        </div>

        <div className="border border-gray-500 px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Exceptional customer service:</b>
          <p className = "text-gray-600">We are committed to exceptional customer service, providing prompt support, personalized assistance, and a smooth shopping experience to ensure complete customer satisfaction.</p>

        </div>

      </div>

      <NewsletterBox/>
    </div>
  )
}

export default About;