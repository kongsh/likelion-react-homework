import React from "react";

const { createElement: h } = React;

interface Profile {
  href?: string;
  userName?: string;
  userImg?: string;
  edit?: boolean;
}

interface ImgProps {
  alt: string;
  src: string;
  className?: string;
}

export default function Profile({ href, userName, userImg, edit = false }: Profile) {
  // 유저 이름, 이미지, 유저 프로필 링크를 DB에서 받았는지 확인
  const isValid = userName && userImg && href;

  let imgProps: ImgProps = {
    // 기본 값 설정
    alt: "프로필 추가",
    src: "assets/profile-plus.svg",
    className: "profile-add",
  };

  if (isValid) {
    delete imgProps.className;

    imgProps = {
      alt: `${userName} 프로필${edit ? " 수정" : ""}`,
      src: userImg,
    };
  }

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
      h("img", imgProps),
      edit
        ? h("img", {
            className: "edit",
            "aria-hidden": true,
            src: "assets/profile-edit.svg",
          })
        : null
    ),
    h("p", { "aria-hidden": true }, isValid ? userName : "프로필 추가")
  );
}
