import React, { useState } from 'react';

export default function WorkoutSplit() {
  const [split, setSplit] = useState([
    {
      id: 0,
      name: 'Push, Pull, Legs (PPL)',
      description: 'The push pull legs (PPL) split is a popular and effective workout routine that divides training sessions into three main categories: push exercises, pull exercises, and leg exercises. This training split is commonly used by individuals seeking to develop overall strength, muscle mass, and symmetry. It offers a balanced approach to training different muscle groups and allows for adequate recovery time between workouts.',
      image: './images/ppl-split.jpeg',
      // link: 'https://www.muscleandstrength.com/workouts/6-day-powerbuilding-split-meal-plan',
    },
    {
      id: 1,
      name: 'Upper, Lower (UL)',
      description: 'The upper-lower split is another popular and effective workout routine that divides training sessions into upper body and lower body workouts. This split allows for a more focused approach to training specific muscle groups while providing adequate recovery time for each area. It is commonly used by individuals looking to build overall strength, muscle mass, and improve athletic performance. Here is a thorough description of the upper-lower split.',
      image: './images/upper-lower-split.jpeg',
      // link: 'https://www.muscleandstrength.com/workouts/upper-lower-4-day-gym-bodybuilding-workout',
    },
    {
      id: 2,
      name: 'Full Body',
      description: 'The full body workout routine is a comprehensive training program that involves targeting all major muscle groups in a single workout session. This type of split is often favored by beginners, individuals with limited time for training, or those seeking a balanced approach to overall strength and muscle development. Here is a thorough description of the full body workout routine.',
      image: './images/full-body-split2.jpeg',
      // link: 'https://www.muscleandstrength.com/workouts/total-package-workout',
    },
    {
      id: 3,
      name: 'Upper, Lower, Push, Pull, Legs (ULPPL)',
      description: 'The upper/lower/push/pull/legs split is one of the most highly customizable splits out there. It can be molded to fit virtually any schedule and can be as flexible or rigid as you need it to be.',
      image: './images/upper-lower-ppl-split.jpeg',
      // link: 'https://www.muscleandstrength.com/workouts/upper-lower-push-pull-legs-split',
    }
  ]);

  return (
    <div>
      {split.map((workout) => (
        <div key={workout.id}>
          <h3>{workout.name}</h3>
          <img src={workout.image} alt={workout.name} />
          <p>{workout.description}</p>
        </div>
      ))}
    </div>
  );
}
