import React from "react";
import { Button } from "@/components/ui/Button";

const Checklist = () => {
  return (
    <div className="responsive flex flex-col space-y-6 py-12">
      <h2 className="text-center text-3xl font-semibold">
        Not ready to commit?
      </h2>

      <div className="space-y-4">
        <p className="">
          Taking the next step can be a big decision. If you&apos;re not ready
          for a full website overhaul or brand redesign, no problem!
        </p>

        <p className="">
          Start with Our Free Brand Strategy Checklist—a tool designed to help
          you assess your current brand strategy and identify the key
          opportunities for improvement. The checklist will help you:
        </p>
      </div>

      <ul className="space-y-4 list-disc list-inside ml-4">
        <li className="">
          <p className="inline">
            <strong>Evaluate the gaps</strong> in your current strategy.
          </p>
        </li>
        <li className="">
          <p className="inline">
            <strong>Get insights</strong> into where your business stands.
          </p>
        </li>
        <li className="">
          <p className="inline">
            <strong>Stay ahead of the competition</strong> with actionable
            recommendations.
          </p>
        </li>
      </ul>
      <div className="inline-block w-full text-center">
        <Button className="w-auto bg-black text-white uppercase">
          Get Me a free checklist!
        </Button>
      </div>
    </div>
  );
};

export default Checklist;
