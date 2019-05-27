/* eslint-disable func-style, no-undefined */

import ava from "ava"
import sinon from "sinon"
import { pubSub } from "./pub-sub.js"

ava.serial ("given a pub without any subs", (t) => {
  const actual = pubSub.pub ()
  const expect = []

  t.deepEqual (actual, expect)
})

ava.serial ("given one sub", (t) => {
  const a = () => "one"

  pubSub.sub (a)

  const actual = pubSub.pub ()
  const expect = ["one"]

  t.deepEqual (actual, expect)
})

ava.serial ("given two subs", (t) => {
  const b = () => "two"
  const c = pubSub.sub (b)

  const actual = pubSub.pub ()
  const expect = ["one", "two"]

  c ()

  t.deepEqual (actual, expect)
})

ava.serial ("given one less sub", (t) => {
  const actual = pubSub.pub ()
  const expect = ["one", undefined]

  t.deepEqual (actual, expect)
})

ava.serial ("given one more sub", (t) => {
  const c = () => "three"

  pubSub.sub (c)

  const actual = pubSub.pub ()
  const expect = ["one", undefined, "three"]

  t.deepEqual (actual, expect)
})

ava.serial ("given a listener with args", (t) => {
  const d = (data) => data

  pubSub.sub (d)

  const actual = pubSub.pub ("input!")
  const expect = ["one", undefined, "three", "input!"]

  t.deepEqual (actual, expect)
})

ava.serial ("given pub and filtering the results", (t) => {
  const actual = pubSub.pub ("stuff!").filter (Boolean)
  const expect = ["one", "three", "stuff!"]

  t.deepEqual (actual, expect)
})

ava.serial ("given two subs and deleting the first", (t) => {
  const e = () => "four"
  const f = () => "five"

  const g = pubSub.sub (e)

  pubSub.sub (f)

  const actual = pubSub.pub ()
  const expect = ["one", undefined, "three", undefined, "four", "five"]

  g ()

  t.deepEqual (actual, expect)
})

ava.serial ("given one sub deleted in prev test", (t) => {
  const actual = pubSub.pub ("ACE")
  const expect = ["one", undefined, "three", "ACE", undefined, "five"]

  t.deepEqual (actual, expect)
})

ava.serial ("spy on a sub function", (t) => {
  const spy = sinon.spy ((data) => `${data} and stuff`)

  pubSub.sub (spy)

  pubSub.pub ("things")
  pubSub.pub ("thing!")

  t.true (spy.calledTwice)
})
