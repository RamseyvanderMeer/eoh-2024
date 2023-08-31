import { Fragment } from "react";
import Content from "@/content";
import Head from "next/head";
import Bubble from "@/bubble";
import Button from "@/button";
import SponsorCard from "@/sponsor-card";

export default function HSDC() {
  return (
    <Content title="High School Design Competition">
        <div className="lg:col-span-3 mb-10">
        <div className="font-montserrat col-span-5">
            Apply to be a part of this year's High School Design Competition! This event will happen on March 31st, 2023, and students can participate in groups of up to 5 students (recommended at least 3 students).
            <br/> The HSDC Rules Packet can be found by clicking <a href="https://docs.google.com/document/d/13yBxDhnJrmcSrAtJnPvlOl7SyaxJnILt/edit?usp=sharing&ouid=104325850608307210887&rtpof=true&sd=true">here</a>.

            Fill out this registration form below by <span className="font-bold">March 7th</span> to be considered!
          </div>
          <div className="font-montserrat">Please reach out to Oviyan Rathi at <a href='mailto:eoh-hsdc@ec.illinois.edu' className="font-bold underline">eoh-hsdc@ec.illinois.edu</a> if you have any questions or concerns.</div>
          <br/>
          <div className="mx-auto text-center">
            <Button
                type="big"
                className="px-4 rounded-none drop-shadow-md"
                href="https://docs.google.com/forms/d/e/1FAIpQLSfcVwFJfK9r_ldobKdwKPoZEXxuC6w0RRqRI-hnIgPZBUP3-Q/viewform"
                target="_blank"
            >
                Registration Form
            </Button>
        </div>
        </div>
    </Content>
  );
}
