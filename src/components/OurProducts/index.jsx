import React from 'react'
import Product from "@/components/Product";


const products = [
  { link: 'https://www.canva.com/design/DAGYF_wc7lU/gpphExW3sFJidxFbQ8B3TQ/view?utm_content=DAGYF_wc7lU&utm_campaign=designshare&utm_medium=link&utm_source=editor', linkMessage: 'Check Out Catalog', imgSrc: '/tags.jpg', title: 'Gift Tags', text: 'Make your gifts unforgettable with our custom gift tags! Choose from a variety of backgrounds and even add a personalized touch—like a face that resembles you or your little ones. 🎁✨Browse our catalog and email us your selections to get started!' },
  { link: 'https://www.canva.com/design/DAGYGmtjhGc/NR9SGX9A-kpCL8hC6iOwyw/view?utm_content=DAGYGmtjhGc&utm_campaign=designshare&utm_medium=link&utm_source=editor', linkMessage: 'Check Out Holiday Catalog', imgSrc: '/boot.jpg', title: 'Holiday Items', text: 'Make your holiday celebrations unforgettable with our custom items! We offer a variety of festive products, including personalized stockings, gift tags, cupcake toppers, place cards, and more. Add a unique touch to your holiday decor and gifts with these special, custom creations designed to bring joy to your season.' },
  { link: 'https://docs.google.com/forms/d/e/1FAIpQLSd4tAWl-jK8LswrdHOzc4XNDYOLJ7WKeVMd9N46nO7JG2Rkcw/viewform', linkMessage: 'Contact Us', imgSrc: '/party.jpg', title: 'Custom Party', text: "Make your next party truly memorable with our personalized party items for both kids and adults! We offer a wide range of custom creations, including cupcake toppers, cake toppers, 3D banners, gift boxes, invites, and more. Whether it's a birthday, celebration, or special event, our unique designs will add a personal touch to your party and make it extra special." },
  { link: 'https://docs.google.com/forms/d/e/1FAIpQLSd4tAWl-jK8LswrdHOzc4XNDYOLJ7WKeVMd9N46nO7JG2Rkcw/viewform', linkMessage: 'Contact Us', imgSrc: '/custom.jpg', title: 'Custom Orders', text: "Don't see what you're looking for? Contact us! We're happy to accommodate custom requests and create other personalized items to suit your needs. Let us help make your celebration one-of-a-kind!" },
]

const OurProducts = () => {
  return (
    <div>
      <h4 className="text-[#5d6a91] text-6xl text-center w-full font-[family-name:var(--font-catchy)]">OUR PRODUCTS</h4>
      <div className="md:flex justify-around items-center w-full mt-12 space-y-24 md:space-y-0 md:space-x-12">
        {products.map((item, index) => {
          return (
            <Product key={index} imgSrc={item.imgSrc} title={item.title} text={item.text} link={item.link} linkMessage={item.linkMessage} />
          )
        })}
      </div>
    </div>
  )
}

export default OurProducts