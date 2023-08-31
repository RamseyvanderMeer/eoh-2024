import { Fragment } from "react";
import Content from "@/content";
import Head from "next/head";
import Bubble from "@/bubble";
import Button from "@/button";
import SponsorCard from "@/sponsor-card";

export default function MSDC() {
  return (
    <Content title="Middle School Design Competition">
        <div className="lg:col-span-3 mb-10">
        <div className="font-montserrat col-span-5">
            Apply to be a part of this year's Middle School Design Competition! This event will happen on March 31st, 2023, and students can participate in groups of up to 4 students (recommended at least 3 students).
            <br/> The MSDC Rules Packet can be found by clicking <a href='https://docs.google.com/document/d/1Pq9fhodLYo4M--V0e41gv_nGiRDMe4ZX36hXorjv97w/edit?usp=sharing' className="font-bold underline" target="_blank">here</a>.
            <br/><br/>Fill out this registration form below by <span className="font-bold">February 25th</span> to be considered!
          </div>
          <div className="font-montserrat">Please reach out to Elizabeth Farah at <a href='mailto:eoh-msdc@ec.illinois.edu' className="font-bold underline">eoh-msdc@ec.illinois.edu</a> if you have any questions or concerns.</div>
          <br/>
          <div className="mx-auto text-center">
            <Button
                type="big"
                className="px-4 rounded-none drop-shadow-md"
                href="https://docs.google.com/forms/d/1_i1NdfTognDZk68WeJSNuF8PQ-KbS21_mhO_pcIp6f4/"
                target="_blank"
            >
                Registration Form
            </Button>
        </div>
        </div>
    </Content>
  );
}
