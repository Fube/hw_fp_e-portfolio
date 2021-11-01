<sprint :name="'Sprint Three'">

<rubric-section :name="'Links'">
    <p class="text-center text-2xl"><span class="text-green-400">Feature</span> | <span class="text-red-600">Bug</span> | <span class="text-blue-400">Doc</span></p>
    <div class="rubric-content">
        <p><a class="link link-secondary text-green-400" href="https://github.com/cgerard321/champlain_petclinic/pull/179">Add login</a></p>
        <p><a class="link link-secondary text-green-400" href=https://github.com/cgerard321/champlain_petclinic/pull/180>Integrate register</a></p>
        <p><a class="link link-secondary text-green-400" href=https://github.com/cgerard321/champlain_petclinic/pull/182>Exception handling</a></p>
        <p><a class="link link-secondary text-green-400" href=https://github.com/cgerard321/champlain_petclinic/pull/183>Integrate email verification</a></p>
        <p><a class="link link-secondary text-green-400" href=https://github.com/cgerard321/champlain_petclinic/pull/191>Integrate login</a></p>
        <p><a class="link link-secondary text-green-400" href=https://github.com/cgerard321/champlain_petclinic/pull/195>Default admin account</a></p>
    </div>
</rubric-section>

<rubric-section :name="'User Story'">
    <div class="rubric-content">
        <p>This sprint, I tried to leave as much of the user stories + acceptance criteria to the product owner as I could.</p>
        <p>Sometimes the ACs did not make sense or the story was incomplete so I sat down with the PO and we refined the stories.</p>
        <p>
            Here is a story I believe is decomposed nicely and has a well written acceptance criteria:
            <img src="/images/sprint3_story_decomposition.png"/>
        </p>
    </div>
</rubric-section>

<rubric-section :name="'Version Control'">
    <div class="rubric-content">
        <p>Since the last sprint, my use of GIT has not gotten better or worse</p>
        <p>
            I used code comments on the PRs I had to review and gave thorough feedback. I also requested changes when I felt it was necessary
            <img src="/images/sprint3_code_pr_comments.png"/>
            <img src="/images/sprint3_change_requested.png">
        </p>
        <p>
            I followed the correct naming conventions for both branches and PRs, and I made my stories on their own branches.
            I also added labels to my PRs to sort them nicely.
            <img src="/images/sprint3_pr_naming.png"/>
            <img src="/images/sprint3_branch_naming.png"/>
        </p>
        <p>
            I made a whole bunch of commits. My philosophy is "1 change = 1 commit". The reason why is simple: easier cherry-pick, reset, readability. And since we squash before merging, it won't make a big glob of commits on the master branch
            <img src="/images/sprint3_30_commits.png" />
            <img src="/images/sprint3_60_commits.png" />
            <img src="/images/sprint3_104_commits.png" />
        </p>
    </div>

</rubric-section>

<rubric-section :name="'Test Driven Development'">
    <div class="rubric-content">
        <p>I used TDD to the best of my capabilities</p>
        <p>
            I always wrote my tests before the implementation (see below image for proof)
            <img src="/images/sprint3_tests_first_impl_later.png"/>
            <img src="/images/sprint3_tests_first_impl_later_2.png"/>
        </p>
        <p>
            All of my stories have in-depth tests associated with them. You can check any of my PRs and see that I have more lines of test than code (see below image for proof)
            <img src="/images/sprint3_more_tests_than_code.png" />
            <img src="/images/sprint3_more_tests_than_code_2.png" />
            That's a total of <strong>739</strong> changes related to tests. The whole branch has <strong>976 added</strong> and <strong>274 removed</strong>.
            <img src="/images/sprint3_login_branch_changes.png" />
        </p>
    </div>
</rubric-section>

<rubric-section :name="'Code'">
    <div class="rubric-content">
        <p>My code meets the criteria put forth in the story's acceptance criteria. This is how I know what to write and when to merge. I always base myself on the AC</p>
        <p>This sprint, I did not need to choose any data-structures or anything like that for me stories so I cannot say much about how "judicious" I was in regards to that</p>
        <p>I did not i18n my stories </p>
        <p>
            I am 100% certain that the database compiles with the data model as I have extensive persistence tests which rely on FlyWay to migrate in-order to pass PLUS manual tests
            <img src="/images/sprint3_persistence_tests.png"/>
            267 lines of persistence test, most of which are written by me for my stories.
        </p>
        <p>
            I am certain that the data I handle is sync'd because of my tests and also because I rely on a reliable library, FlyWay, to migrate the database rather than just writing SQL scripts and running them on startup.
            <img src="/images/sprint3_db_migrations.png"/>
        </p>
        <p>I ensured optimization of DB queries by using the JPABuddy plugin on IntelliJ</p>
    </div>
</rubric-section>

<rubric-section :name="'Security'">
    <div class="rubric-content">
            <p>This sprint I added login so security was a big portion of the sprint.</p>
            <p>Firstly, I use SpringSecurity to manage authentication & authorization. SpringSecurity is a big and reliable library.</p>
            <p>Secondly, I use JWT to manage authentication. JWT is quite secure, though not as secure as sessions. A tradeoff between security and performance.</p>
            <p>Thirdly, I did extensive research about JWT. Recall that I gave a presentation about it to both classes.</p>
            <p>One thing I will note though is that the token should really be stored in an <code>http-only</code>, but due to limitations with APIG, I could not do that.</p>
            <p>
                Currently, the token is stored in the local storage, which is more prone to XSS attacks.<br>
                This <a class="link link-secondary" href="https://dzone.com/articles/cookies-vs-tokens-the-definitive-guide">article</a> explains why.
            </p>
        <p>
            I used DTOs where I felt it was necessary to prevent sensitive data from leaving the internal system.
            <img src="/images/sprint3_using_dto.png"/>
            <img src="/images/sprint3_using_dto_in_login.png"/>
        </p>
        <p>
            Unfortunately, we did not get time to implement UUIDs as I would have wanted.<br>
            Here I am going to ask you to cut me some slack.<br>
            I brought up <strong>two</strong> services by lonesome.<br>
            Whole teams had trouble maintaining <strong>one</strong>.<br>
        </p>
    </div>

</rubric-section>

<rubric-section :name="'Reviews'">
    <div class="rubric-content">
        <p>I reviewed code as best as I could and ensured my code was reviewed properly by checking in with the reviewers</p>
        <p>When I spotted suspicious code, I pulled and tested locally then checked the JaCoCo report</p>
        <p>
            I added code comments & I started using code comments and asking questions (as opposed to giving commands as per Jason's instructions).
            <img src="/images/sprint2_pull_138_code_comments_example.png" />
        </p>
        <p>I ensured that my reviewers actually reviewed my code by asking questions about it in person after they had reviewed it</p>
        <p>I kept a close eye on the naming of the PRs I reviewed (branch & PR name)</p>
    </div>
</rubric-section>

<rubric-section :name="'E2E Tests'">
    <div class="rubric-content">
        <p>Selenium testing was a bit off for our service.</p>
        <p>
            Unbeknownst to me, my <strong>teammates</strong> wrote tests for <strong>my</strong> stories.<br>
            When I asked them why, they said because that was the only thing they could contribute.<br>
            I felt bad so I did not remove their Selenium tests even though they should've (rightfully) been written by me.
        </p>
        <p>
            Here is a screenshot of how I <strong>would have</strong> written the tests (wherever there is a orange or green on the left bar, that means I have changed it)
            <img src="/images/sprint3_selenium_what_if.png" />
            Here my teammates made a couple of fatal mistakes.<br>
            Firstly, too many <code class="text-gray-900">Thread.sleep</code><br>
            This causes the tests to be slow.<br>
            Instead, we should opt for <code class="text-gray-900">WebDriverWait</code><br>
            This sped up the tests exponentially.<br>
            Secondly, there was no actual testing of the error message.<br>
            Just that the button was clicked...<br>
        </p>
    </div>
</rubric-section>

<rubric-section :name="'Deployment'">
    <div class="rubric-content">
        <p>I am 100% sure that my story can be deployed through the CI/CD pipelines we have set-up.</p>
        <p>To my knowledge, we did not deploy anything nor were we asked to so I cannot really speak on this for this sprint.</p>
    </div>
</rubric-section>

<rubric-section :name="'Scrum Roles'">
    <div class="rubric-content">
        <p>Although it was my turn, I did not have a special scrum role</p>
        <p>The reason is simple: special role == half load, meaning that some critical aspects of AUTH (i.e. login) would not have been delivered.</p>
        <p>I am saddened by this, but sometimes you gotta do what you gotta do.</p>
        <p>
            I am a tad disappointed in my team this sprint.<br>
            There was no transparency.<br>
            I learned that they were not going to deliver anything at the last minute and no one asked for help 🙁.<br>
        </p>
        <p>I am very happy with my PO's (Jon) performance</p>
        <p>
            I am extremely happy with my SM's (Jordan) performance.<br>
            He took minutes.<br>
            He planned, specific time and location, the stand-ups ahead of time.<br>
            Made sure everyone was listening in on the stand-ups rather than just giving their report and then talking amongst themselves.<br>
        </p>
    </div>
</rubric-section>

<rubric-section :name="'Progress'">
    <div class="rubric-content">
        <p>I performed spectacularly this sprint.</p>
        <p>I delivered everything I committed to during the planning.</p>
        <p>I talked with my PO for the stories and their ACs.</p>
        <p>I fulfilled what I committed to and then some. I also unblocked my teammates wherever I could by giving them guides, articles, and documentation to read.</p>
        <p>
            During the last retrospective, we noted that the exception handling over HTTP could be better (see below image), and my stories this sprint addressed that completely.
            <img src="/images/sprint2_retrospective.jpg" />
            My related story:
            <img src="/images/sprint3_exception_handling_pr.png" />
        </p>
        <p>
            Here is the board from our sprint retrospective
            <img src="/images/sprint3_retrospective.jpg" />
        </p>
        <p>In all honesty, none of the things in the "could be better" applies to me.</p>
        <p>
            I did TDD, I did not leave my stories for the last minute, I handle my exceptions, I test and ensure the quality of my tests, I give thorough reviews and request changes when necessary, and I try my damndest to be transparent and communicate with my team.
        </p>
    </div>
</rubric-section>
</sprint>
