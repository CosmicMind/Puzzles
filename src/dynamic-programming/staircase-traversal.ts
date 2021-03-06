/**
 * BSD 3-Clause License
 *
 * Copyright (c) 2022, Daniel Jonathan <daniel at cosmicmind dot org>
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are met:
 *
 * 1. Redistributions of source code must retain the above copyright notice, this
 *    list of conditions and the following disclaimer.
 *
 * 2. Redistributions in binary form must reproduce the above copyright notice,
 *    this list of conditions and the following disclaimer in the documentation
 *    and/or other materials provided with the distribution.
 *
 * 3. Neither the name of the copyright holder nor the names of its
 *    contributors may be used to endorse or promote products derived from
 *    this software without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
 * AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
 * IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
 * DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE
 * FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL
 * DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR
 * SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER
 * CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY,
 * OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
 * OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */

/**
 * @module StaircaseTraversal
 *
 * Staircase Traversal
 *
 * You're given two positive integers representing the height of a staircase
 * and the maximum number of steps you can advance up the staircase at a time.
 * Write a function that returns the number of ways in which you can climb the
 * staircase.
 *
 * For example, if you were given a staircase of height = 3 and maxSteps = 2
 * you could climb the staircase in 3 ways. You would take 1 step, 1 step,
 * then 1 step, you could also take 1 step, then 2 steps, and you could take
 * 2 steps, then 1 step.
 *
 * Note that maxSteps <= height will always be true.
 *
 * Optimal Space & Time Complexity
 * O(n) time | O(n) space - where n is the height of the staircase.
 *
 * Sample Input
 * (1) height = 4, maxSteps = 2
 * (2) height = 6, maxSteps = 3
 */

export function staircaseTraversal(height: number, maxSteps: number): number {
  let numOfWays = 0

  const waysToTop: number[] = []
  waysToTop[0] = 1

  for (let i = 1, l = height + 1; i <= l; ++i) {
    const startOfWindow = i - maxSteps - 1
    const endOfWindow = i - 1

    if (0 <= startOfWindow) {
      numOfWays -= waysToTop[startOfWindow]
    }

    numOfWays += waysToTop[endOfWindow]
    waysToTop.push(numOfWays)
  }

  return waysToTop[height]
}