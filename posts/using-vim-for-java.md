---
title: "Why I started using Vim to program Java"
date: "2023-10-06"
---

## Coding like it's 1979

In the summer of 2023, I had the amazing opportunity to take part in a short coding camp that had the goal of increasing foundational programming skills in C. The essence of our activities focused upon typical coding challenges on data structures and algorithms, like you might find on LeetCode. The camp had some peculiar rules to it though -- no fancy code editors, no external libraries, no internet.

This meant that it was just you and the command line. All code had to be written in Vim or Emacs (no plugins allowed). If you forgot something, you only had the Unix man pages as a resource. Collaboration between participants was not allowed.

Now, there are certainly many developers who might read this and think, "so what?" After all, it seems like most professional developers prefer to keep their workflow in the command-line as much as possible, and pride themselves on being able to work without ever having to touch a mouse.

You have to understand, however, that this was not a coding camp for professional developers, but for complete amateurs. Many participants had little to no experience programming, and those who did had never worked under such conditions. During breaks, you could hear near constant complaining.

- _Why can't we just use VS Code?_
- _Why can't we use Stack Overflow?_
- _But even professional developers use Google all the time..._
- _Why are we coding in C instead of a more **modern** programming language?_

Personally, I felt a bit conflicted about the arrangement. I had more programming experience than most people in attendance, and I had always programmed using the most modern IDEs with Google as my constant companion. But I tried to have faith that there must be some good reason for all the rules and restrictions that were in place.

At first, it was difficult to retrain my instinct to Alt-Tab to my browser and google something any time it didn't instantly come to mind. I soon came to realize just how much I overuse Google. Often times, I would have an urge to google things which I could easily figure out myself if I simply gave myself some time to think. I would have this knee-jerk reaction to google code snippets that I know are available on Google, even though I could certainly write them myself if I actually tried.

## My coding speed screeches to a halt

Vim is known for having an unfriendly learning curve. When I first started using it, it felt like my typing speed slowed into the single digits.

Aside from the particularities of adjusting to Vim, it was the first time I had used a code editor in years that didn't automatically complete my code for me. Coding without relying on Intellisense, automated imports, and automated compilation was a huge eye-opener for me. Despite having made a handful of projects in C before, I realized that I had never internalized many of the nuances of syntax. I spent a lot of time in the beginning debugging code not because I had approached the problem incorrectly, but because I had made several careless mistakes in syntax. I was so used to these mistakes being automatically corrected by my IDE, that I never realized I had been making them.

Vim also taught me to be more efficient. When using a modern IDE like VS Code, you probably don't think too much about grabbing your mouse, scrolling through files, selecting text, and clicking to move your cursor around. This was not an option when using Vim. Even though I considered myself to be much more "keyboard-savy" than the average participant, I came to see how much I was used to relying on the mouse for completely stupid reasons. To give some examples:

- Using the mouse's scroll wheel to scroll to the bottom of an extremely long file
- Selecting an entire line of text I want to delete
- Manually clicking through every instance of a variable name I want to change

And many more. Without the mouse available, most people's first instinct is to start relying on the arrow keys (or hjkl in Vim) to navigate through the files. Once your programs get large enough, however, you quickly realize how incredibly inefficient this is.

At first I had a huge feeling of resistance to spending time studying all the hotkeys and tricks to use Vim. I felt a little bit uncertain of myself as I started at a seemingly never-ending list of keystroke combinations while those around me were progressing with their code. On the other hand, I felt like I would go crazy if I had to keep relying on the snail-pace efficiency of navigating files with arrow keys.

Spending the time to learn and practice the Vim hotkeys I needed proved to be invaluable. Not only did I immensely speed up my speed writing code in Vim, I now felt like I couldn't live without these tricks which streamlined many of the repetitive tasks involved in writing code. As soon as I got home that day, I looked up the equivalents for the other IDEs I normally use.

## Taking responsibility for my code

By the time I participated in this camp, I had already done a couple hundred challenges from sites like LeetCode which give you the typical data structure and algorithm coding challenges you expect to see in technical interviews. While such sites are a great resource for practicing coding, this camp made me realize just how much work they do for you.

First of all, you typically don't have to manually include imports or write the class/function declarations yourself. This may just be a tiny step, but I found that having to do everything manually made me pay attention to the data I was working with and which tools I would need to accomplish the job. Up until that point, I had never really thought it was important to check out the content of libraries I was using, since modern IDEs import everything for you automatically.

Secondly, sites like LeetCode come with built-in tests to check the accuracy of your code. In the past, whenever I had been working on coding challenges, I would hastily submit the code once I felt like I had "solved" the problem, then look at the output the site gave me. I would often discover that I neglected one or two edge cases, but the output usually made it obvious how I needed to fix my code.

In this new coding camp, however, you would receive no such feedback. Your code would simply be graded correct or incorrect by the machine, and submitting incorrect code resulted in large time penalties that would delay your progression or force you to start activities over from scratch.

The importance of thoroughly testing my code before submitting quickly became obvious. Of course I had tested code before, but typically using automated tools or only for functions where I knew that only reasonable data would ever be passed.

Creating my own tests for all the code I wrote made me think about the problems more carefully, spot inefficiencies in my code, and to program defensively. I felt like this added another dimension to my problem-solving approach when taking on coding challenges.

Finally, having to manually type the commands to compile and run my code improved my attention to detail. I am used to using systems where you click one button or hotkey, and your code automatically compiles and gives you a nicely formatted stack trace allowing you to easily identify any bugs or typos you made. The added work of having to type commands and sort through the stack trace in a separate window made me pay more attention to writing clean code and really understanding what I was doing before trying to run the program.

## Conflicting feelings

At the end of the camp, everyone had learned a lot, but not everyone was convinced of the camp's philosophy.

- _What's the point of memorizing all this stuff yourself if the result is the same when an IDE does it for you?_
- _But in the real world we would be using the internet all the time, so this is pointless..._
- _Isn't the whole point of all the innovation of the past decades to make things easier for developers to be more productive?_
- _Why should I devote this stuff to memory when I can just ask Google or Chat GPT to do it for me?_

Perhaps the problem was, the camp didn't really explain their philosophy at all. They give us the rules, but not the reason behind the rules.

I personally felt conflicted. While I don't think I could now build anything that I couldn't already build before, I somehow felt like a more confident and competent coder. I felt like having to do everything the old-school way made me feel like I was doing the work myself, not that the coding environment was doing the work for me.

But I also understood the perspective of my coursemates. If the important thing is solving the problem at hand, then maybe all the little details about syntax, libraries, and so on don't matter. If you arrive at the same destination, does it really matter how you get there?

That weekend, I went home to my Windows laptop and looked at the array of modern IDEs on my Desktop. As much as I admired the functionality and polish of these modern tools, I somehow felt a longing for the simplicity for coding in Vim.

Why should I miss Vim though, when programming in a modern IDE is so much easier? What was appealing to me about this simple text editor, when all my friends working as professional software developers told me they prefer VS Code and IntelliJ?

This is when it hit me:

# **Modern IDEs are made for professional developers, not people learning how to code.**

Modern IDEs are made for professional developers, by professional developers. They do not have the amateur or student developer in mind. As a result, I think many of the convenient features of IDEs can actually get in the way of developing one's skills as a budding programmer.

While the application feels like home to me now, I still remember feeling absolutely overwhelmed the first day I opened VS Code. It felt like there were so many cryptic icons and mysterious panes that I didn't know if I would ever feel comfortable using the application.

To this day, I still feel like the majority of little icons, menu options, and widgets in Eclipse remain a mystery to me, despite having spent plenty of time using the application.

I realized that using Vim to code felt good not because of the novelty or because of the "nerdier than thou" reputation that it has developed in coding communities. I liked it because it made me feel in control, like I had a complete understanding of everything I was doing.

Doing things "the hard way" made me feel more confident in what I was doing and made me feel much more comfortable working in the command-line.

## Transitioning to use Vim on Windows

I decided at that point to install Vim on my Windows machine so I could keep up my practice of coding in the terminal.

My programming language of choice when it comes to preparing for technical interviews is Java, and at first I had misgivings about writing Java in Vim. Maybe Vim was fine for writing C, but would it work for Java? Java seemed so much more complex than C with its plethora of built-in data structures, utilities, and libraries.

But the more I thought about it, the more I thought that it was a good idea. Despite having written tons of code in Java by that point, I still found myself looking up the syntax for certain things nearly every time I needed to use them. Training myself to write Java in Vim made things stick better in my head and reduce the amount of times I felt the need to turn to Google.

I know some people probably think, _"What's the point? Training for some unlikely hypothetical scenario in which you'll have to code without internet access?_" And I have asked myself the same question sometimes, wondering if I am spending valuable time on something trivial. But at the end of the day, I still feel like there are many benefits which make me want to continue.

These include:

1. Increasing my confidence working in the terminal.
2. Coding and moving through files more quickly. Less dependence on the mouse.
3. Drawing more attention to testing my code and making sure I understand what I'm doing.
4. Increasing speed and efficiency finding mistakes in my code.
5. Increasing my confidence to face technical interviews where Intellisense and autocompletion may not be available

In the end, I just feel happy and grateful for the opportunity to be introduced to Vim and how it helped me develop as a programmer. If you are currently learning programming, I encourage you to give it a try. Choosing the harder option often makes us stronger in the end.
