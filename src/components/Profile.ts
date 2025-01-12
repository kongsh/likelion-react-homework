import React from "react";

const { createElement: h } = React;

interface Profile {
  href?: string;
  userName?: string;
  userImg?: string;
  edit?: boolean;
}

export default function Profile({ href, userName, userImg, edit = false }: Profile) {
  const isValid = userName && userImg && href;

  return h(
    "div",
    {
      className: "profile",
    },
    h(
      "a",
      {
        // href: href ? href : "프로필 추가 사이트로 가는 링크",
        href: href ? href : "#",
      },
      isValid
        ? h("img", {
            src: userImg,
            alt: `${userName} 프로필${edit ? " 수정" : ""}`,
          })
        : h("img", {
            className: "profile-add",
            src: "src/assets/profile-plus.svg",
            alt: "프로필 추가",
            style: {
              margin: "34px",
            },
          }),
      h("img", {
        className: "edit",
        hidden: !edit,
        "aria-hidden": true,
        src: "src/assets/profile-edit.svg",
      })
    ),
    h("p", { "aria-hidden": true }, isValid ? userName : "프로필 추가")
  );
}
