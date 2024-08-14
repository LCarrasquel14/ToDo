import { OptionProps } from "@/ui/Menu/Menu";

export const options: OptionProps[] = [
  {
    label: "edit",
    key: "1",
    selected: true,
  },
  {
    label: "delete",
    key: "2",
    selected: false,
  },
  {
    label: "copy",
    key: "3",
    selected: false,
  },
];

export const options2: OptionProps[] = [
  {
    label:"All tasks",
    key:"1",
    selected:true
  },
  {
    label:"To do",
    key:"2",
    selected:false

  },
  {
    label:"In progress",
    key:"3",
    selected:false
  },
  {
    label:"Done",
    key:"4",
    selected:false
  }
]
