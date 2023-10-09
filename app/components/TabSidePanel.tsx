"use client";
import { Tab } from "@headlessui/react";

export default function TabSidePanel() {
  return (
    <div className="p-8 fixed left-0 ">
      <h1 className="text-4xl">Post Categories</h1>
      <Tab.Group>
        <Tab.List className="flex flex-col space-y-4 px-4 mt-4">
          <Tab className="p-4 ui-selected:bg-blue-500 ui-selected:text-white ui-not-selected:bg-white ui-not-selected:text-black rounded-xl bg-blue-900/20">
            Programming
          </Tab>
          <Tab className="p-4 ui-selected:bg-blue-500 ui-selected:text-white ui-not-selected:bg-white ui-not-selected:text-black rounded-xl bg-blue-900/20">
            Foreign Languages
          </Tab>
          <Tab className="p-4 ui-selected:bg-blue-500 ui-selected:text-white ui-not-selected:bg-white ui-not-selected:text-black rounded-xl bg-blue-900/20">
            Life
          </Tab>
        </Tab.List>
      </Tab.Group>
    </div>
  );
}
