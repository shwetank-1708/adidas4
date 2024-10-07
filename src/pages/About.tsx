import React from "react";
import Title from "../components/Title";
import adidas_about from "../assets/adidas_about.jpg";

const About = () => {
  return (
    <div>
      <div className="text-2xl text-center pt-8 border-t">
        <Title text1={"ABOUT"} text2={"US"} />
      </div>

      <div className="my-10 flex flex-col md:flex-row md:justify-center gap-16">
        <img className="w-full md:max-w-[450px]" src={adidas_about} alt="" />
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-gray-600">
          <p>
            Adidas AG (German pronunciation: ; stylized in all lowercase since
            1949)[4] is a German athletic apparel and footwear corporation
            headquartered in Herzogenaurach, Bavaria, Germany. It is the largest
            sportswear manufacturer in Europe, and the second largest in the
            world, after Nike.[5][6] It is the holding company for the Adidas
            Group, which also owns an 8.33% stake of the football club Bayern
            München,[7] and Runtastic, an Austrian fitness technology company.
            Adidas's revenue for 2018 was listed at €21.915 billion.
          </p>
          <p>
            The company was started by Adolf Dassler in his mother's house. He
            was joined by his elder brother Rudolf in 1924 under the name
            Gebrüder Dassler Schuhfabrik ("Dassler Brothers Shoe Factory").
            Dassler assisted in the development of spiked running shoes (spikes)
            for multiple athletic events. To enhance the quality of spiked
            athletic footwear, he transitioned from a previous model of heavy
            metal spikes to utilising canvas and rubber. Dassler persuaded U.S.
            sprinter Jesse Owens to use his handmade spikes at the 1936 Summer
            Olympics. In 1949, following a breakdown in the relationship between
            the brothers, Adolf created Adidas and Rudolf established Puma,
            which became Adidas's business rival.[
          </p>
          <b className="text-gray-800">Our Mission</b>
          <p>
            "To be the global leader in the sporting goods industry with brands
            built on a passion for sports and a sporting lifestyle"
          </p>
        </div>
      </div>

      <div className="text-xl py-4">
        <Title text1={"WHY"} text2={"CHOOSE US"} />
      </div>

      <div className="flex flex-col md:flex-row text-sm mb-20">
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Quality Assurance: </b>
          <p className="text-gray-600">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem totam
            impedit hic voluptatum enim obcaecati distinctio sed quia cupiditate
            explicabo?
          </p>
        </div>

        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Convenience: </b>
          <p className="text-gray-600">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem totam
            impedit hic voluptatum enim obcaecati distinctio sed quia cupiditate
            explicabo?
          </p>
        </div>

        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Exceptional Customer Service: </b>
          <p className="text-gray-600">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem totam
            impedit hic voluptatum enim obcaecati distinctio sed quia cupiditate
            explicabo?
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
