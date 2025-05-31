"use client";

import React from "react";

export function Button(props: {
    children: React.ReactNode;
    className?: string;
    fnc: () => void;
}) {
    return (
        <button onClick={props.fnc} className={props.className}>
            {props.children}
        </button>
    );
}
