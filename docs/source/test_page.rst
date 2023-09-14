Getting Started
===============

.. container:: post-content

   This guide is intended for users with no prior experience with
   Linux/Command Line Interface (CLI) or Cluster Computing. Refer to the
   `User Guide </resources/docs/user-guide/>`__ for detailed information
   on using the Campus Cluster. New users may also benefit from the
   `Getting Started on the Illinois Campus
   Cluster <https://www.hpc-training.org/xsede/moodle/course/view.php?id=39>`__
   tutorial as well as viewing the `Campus Cluster training
   videos </resources/training/campus-cluster-hpc-training-videos/>`__ .

   .. rubric:: Introduction
      :name: intro

   The basic building block of a Linux cluster is a *node* . The two
   primary types of nodes on a cluster are:

   -  **Compute nodes** — these are the majority of nodes on a cluster
      and are the nodes that run user jobs
   -  **Head nodes** — one or more on a cluster and where you login from
      your local computer (laptop/desktop)

   User access to the compute nodes is only available via a *batch job*
   . This is typically a sequence of commands listed in a file called a
   *batch script* that can be executed without the intervention of the
   user. The batch script is a plain text file that starts with
   *directives* that describe the requirements of the job such as number
   of nodes and wall clock time, followed by the user’s commands to
   execute specific tasks or run a specific code. An *interactive batch
   job* provides a way to get interactive access to a compute node via a
   batch job. This is useful for testing and debugging purposes.

   From the head nodes, the batch job is submitted to a *queue* to be
   scheduled to run when the compute node resources requested are
   available. Users can also check status, monitor progress, or delete
   batch jobs on the head nodes.

   **IMPORTANT** : The head nodes on the Campus Cluster are a shared
   resource for all users of the system and their computational use
   should be limited to editing, compiling, and for short non-intensive
   runs. The administrators may terminate user processes on the head
   nodes that impact the system without warning. Users should do all
   production work by submitting jobs to the batch system.

   .. rubric:: Using the Campus Cluster
      :name: using

   +-----------------------+-----------------------+-----------------------+
   | |CC Diagram|          |                       |                       |
   +-----------------------+-----------------------+-----------------------+
   | CC User               | Head Node             | Compute Node          |
   +-----------------------+-----------------------+-----------------------+
   | Connect to a head     | -  Learn              | -  All batch jobs run |
   | node from your local  |    `Linux <#linux>`__ |    on the compute     |
   | computer using an     |    basics             |    nodes.             |
   | `ssh                  | -  `Transfer          | -  Each investor      |
   | client <#access>`__ . |    files <#data>`__   |    group has a        |
   |                       |    to and from the    |    dedicated          |
   |                       |    campus cluster     |    *primary* queue.   |
   |                       | -  Use a `text        |    There is also a    |
   |                       |                       |    shared *secondary* |
   |                       |   editor <#editor>`__ |    queue for          |
   |                       | -                     |    opportunistic      |
   |                       |  `Build <#compile>`__ |    access to idle     |
   |                       |    applications       |    nodes, and a very  |
   |                       | -  `Submit batch      |    short time *test*  |
   |                       |    jobs <#submit>`__  |    queue that         |
   |                       |    for scheduling on  |    provides quick     |
   |                       |    the compute nodes  |    turnaround time.   |
   +-----------------------+-----------------------+-----------------------+

   .. rubric:: Access
      :name: access

   Users with accounts on the Campus Cluster connect to the head nodes
   via SSH (Secure Shell) client using their official University of
   Illinois `NetID and NetID
   password <https://answers.uillinois.edu/illinois/page.php?id=48242>`__
   .

   Linux and MacOS based machines have an ssh client installed by
   default. Desktops/Laptops running versions of Windows prior to
   Windows 10 version 1803 do not, but a list of some popular ssh
   clients is available `here </resources/docs/user-guide/#ssh>`__ and
   can be downloaded for use.

   Below is a list of hostnames that provide round-robin access to head
   nodes of the Campus Cluster instances as indicated:

   +---------------+-------------------------+-------------------------+
   | Access Method | Hostnames               | Head Nodes              |
   +---------------+-------------------------+-------------------------+
   | SSH           | cc-login.cam            | namehN (ex. cc-login1,  |
   |               | puscluster.illinois.edu | golubh1)                |
   +---------------+-------------------------+-------------------------+

   **Note:** In the examples within this beginner’s guide, My_NetID
   represents your official University of Illinois NetID.

   SSH clients come in two formats:

   -  

      -  Graphical User Interface (GUI) – when logging in from a Windows
         based machine.
         |Windows GUI|
      -  Command Line Interface (CLI) – when logging in from a
         Linux/UNIX based system (Fedora, SuSE, Mac OS, etc…).

   |Linux CLI|

   Users are automatically connected to 1 of the 4 head nodes of the
   Campus Cluster and will see a similar prompt to the one listed below:

   ``[My_NetID@golubh1 ~]$``

   after successfully logging into the Campus Cluster.

   While logged into the Campus Cluster users interact with resources
   through the CLI. This means that users will need to issue commands on
   the command line to accomplish various tasks.

   .. rubric:: Working with the CLI
      :name: linux

   Since the Campus Cluster’s user environment is Linux based, it is
   **essential** to have a basic working knowledge of Linux to be able
   to compute successfully on the Campus Cluster. The information in the
   table below and the number available online tutorials can help new
   Linux users learn enough to get started.

   +-----------------+-----------------+-----------------+-----------------+
   | Useful          |                 |                 |                 |
   | Unix/Linux      |                 |                 |                 |
   | Commands        |                 |                 |                 |
   +-----------------+-----------------+-----------------+-----------------+
   | Basic Comands   |                 | Working with    |                 |
   |                 |                 | Files           |                 |
   +-----------------+-----------------+-----------------+-----------------+
   | Command         | Description     | Command         | Description     |
   +-----------------+-----------------+-----------------+-----------------+
   | ls              | List directory  | nano **myfile** | Create a new    |
   | ls -l           | contents        |                 | (or edit an     |
   |                 | Detailed        |                 | existing) file  |
   |                 | listing of      |                 | named myfile    |
   |                 | directory       |                 | with a simple   |
   |                 | contents        |                 | text editor     |
   +-----------------+-----------------+-----------------+-----------------+
   | pwd             | Display the     | grep **string   | Display the     |
   |                 | path of the     | myfile**        | lines in myfile |
   |                 | current/working |                 | that contain a  |
   |                 | directory       |                 | matching        |
   |                 |                 |                 | pattern (       |
   |                 |                 |                 | string )        |
   +-----------------+-----------------+-----------------+-----------------+
   | man             | Display online  | cat **myfile**  | Display the     |
   | *               | help (manual    |                 | entire contents |
   | *command_name** | page) for       |                 | of the file     |
   |                 | command_name    |                 | myfile          |
   +-----------------+-----------------+-----------------+-----------------+
   | quota           | Display your    | more **myfile** | Display the     |
   |                 | home directory  |                 | contents of the |
   |                 | disk usage      |                 | file myfile ,   |
   |                 |                 |                 | one page at a   |
   |                 |                 |                 | time            |
   +-----------------+-----------------+-----------------+-----------------+
   | ps -u           | Display         | cp **myfile1    | Copy the file   |
   |                 | detailed        | myfile2**       | myfile1 to      |
   |                 | information     |                 | myfile2         |
   |                 | about your      |                 |                 |
   |                 | running         |                 |                 |
   |                 | processes       |                 |                 |
   +-----------------+-----------------+-----------------+-----------------+
   | exit or logout  | Log out of your | mv **myfile1    | Rename the file |
   |                 | current session | myfile2**       | to myfile2      |
   +-----------------+-----------------+-----------------+-----------------+
   | history         | Display a list  | mv **myfile     | Move the file   |
   |                 | of the commands | mydir**         | myfile into the |
   |                 | you’ve recently |                 | directory mydir |
   |                 | run             |                 |                 |
   +-----------------+-----------------+-----------------+-----------------+
   | date            | Display the     | rm **myfile**   | Delete the file |
   |                 | system date and |                 | myfile          |
   |                 | time            |                 |                 |
   +-----------------+-----------------+-----------------+-----------------+
   |                 |                 | mkdir **mydir** | Create a        |
   |                 |                 |                 | directory named |
   |                 |                 |                 | mydir           |
   +-----------------+-----------------+-----------------+-----------------+
   |                 |                 | cd **mydir**    | Change the      |
   |                 |                 |                 | current         |
   |                 |                 |                 | directory to    |
   |                 |                 |                 | mydir           |
   +-----------------+-----------------+-----------------+-----------------+
   |                 |                 | rmdir **mydir** | Remove the      |
   |                 |                 |                 | directory mydir |
   |                 |                 |                 | (if empty)      |
   +-----------------+-----------------+-----------------+-----------------+

   +-----------------------+-----------------------+-----------------------+
   | .. rubric:: Linux     | .. rubric:: Text      | .. rubric:: Shell     |
   |    Tutorials          |    Editing            |    Scripting          |
   |    :                  |                       |    :                  |
   | name: linux-tutorials |   :name: text-editing | name: shell-scripting |
   |                       |                       |                       |
   | -  `Learning The      | -  `Beginner’s Guide  | -  `Bash Shell        |
   |                       |    to                 |    S                  |
   |   Shell <http://linux |    Nano               | cripting <http://en.w |
   | command.org/lc3_learn | <http://www.howtogeek | ikibooks.org/wiki/Bas |
   | ing_the_shell.php>`__ | .com/howto/42980/>`__ | h_Shell_Scripting>`__ |
   | -  `UNIX Tutorial for | -  `Interactive VIM   |    (bash)             |
   |    Beginners <htt     |    Tutorial           | -  `C Shell           |
   | p://www.ee.surrey.ac. |  <http://www.openvim. |                       |
   | uk/Teaching/Unix/>`__ | com/tutorial.html>`__ |   Scripting <http://e |
   | -  `Unix              | -  `vi Text Editor    | n.wikibooks.org/wiki/ |
   |    Tut                |    Tutoria            | C_Shell_Scripting>`__ |
   | orial <http://www.mat | l <http://www.penguin |    (csh)              |
   | h.utah.edu/lab/unix/u | tutor.com/linux/vi-te | -  `Linux Shell       |
   | nix-tutorial.html>`__ | xteditor-tutorial>`__ |    Scripting          |
   |                       |                       |    Tutorial <htt      |
   |                       |                       | p://bash.cyberciti.bi |
   |                       |                       | z/guide/Main_Page>`__ |
   |                       |                       |    (bash)             |
   +-----------------------+-----------------------+-----------------------+

   Key word combinations such as *Unix Tutorial* , *Linux Tutorial* ,
   *Linux Text Editing* , *Shell Scripting* , etc., can be used in any
   search engine to find additional information online.

   .. rubric:: Data Transfer
      :name: data

   Users may have a need to move data between a local system and the
   Campus Cluster. On Windows systems, several SSH based clients provide
   functionality for file transfer (SCP/SFTP). The list of `SSH
   Clients </resources/docs/user-guide/#ssh>`__ in the Data Transfer
   section of the Campus Cluster user guide indicates which ones support
   both file transfer and remote login functionality.

   SCP/SFTP clients are also available in two formats: GUI and CLI.

   .. rubric:: GUI Data Transfer Examples
      :name: gui-data-transfer-examples

   Generally GUI-based scp/sftp clients implement a drag and drop
   interface. (Recommended for beginning users)

   **Bitvise Tunnelier SFTP client**

   |Bitvise Tunnelier SFTP GUI|

   **SSH Secure Shell SFTP client**

   |SSH Secure Shell SFTP GUI|

   .. rubric:: CLI Data Transfer Examples
      :name: cli-data-transfer-examples

   The CLI examples below display scp and sftp syntax for transferring
   files between the Campus Cluster and a local system.

   .. rubric:: scp example:
      :name: scp-example

   Transferring a file on your local system to your home directory on
   the Campus Cluster:

   ``my_desktop% scp local_file My_NetID@cc-xfer.campuscluster.illinois.edu:~/``

   Transferring a file in your home directory on the Campus Cluster to
   your local system:

   ``my_desktop% scp My_NetID@cc-xfer.campuscluster.illinois.edu:~/remote_file ./``

   .. rubric:: sftp example:
      :name: sftp-example

   Transferring files between your local system and the Campus Cluster:

   ``my_desktop% sftp My_NetID@cc-xfer.campuscluster.illinois.edu``
   ``sftp> put local_file`` ``sftp> get remote_file``

   Command line interface usage on Windows based machines may require
   additional configuration steps or use of specially named commands for
   scp and sftp. The additional CLI configuration information or usage
   instructions can be found in the documentation for the specific ssh
   client.

   .. rubric:: Editors
      :name: editor

   Text editors are used for editing plain text files. The Campus
   Cluster has two text editing programs:
   `vi <http://en.wikibooks.org/wiki/Learning_the_vi_Editor>`__ (and an
   improved version called `vim <http://www.vim.org/>`__ ) and
   `nano <http://www.nano-editor.org/>`__ .

   vi/vim is one of the most commonly used text editors, however we
   suggest users new to working in the Linux environment start off using
   nano to edit text files because it may be more similar to the way
   users edit text files on non-linux based machines. The general syntax
   to begin editing a file with nano is

   ``nano file.txt``

   .. container::
      :name: sp_easy_accordion-1694707054

      .. container:: sp-ea-one sp-easy-accordion
         :name: sp-ea-1466

         .. container:: ea-card sp-ea-single

            .. rubric:: `Editor Example <javascript:void(0)>`__
               :name: editor-example
               :class: ea-header

            .. container:: sp-collapse spcollapse spcollapse
               :name: collapse14660

               .. container:: ea-body

                  Use the nano text editor to create a "hello world" C
                  program. Type the following

                  ``[My_NetID@cc-login1 ~]$ nano hello.c``

                  to open a blank text file name hello.c . Type the
                  program exactly as it is shown below in your nano text
                  editing session.

                  ::

                     #include 

                                                                         main()
                                                                         {
                                                                           printf("Hello, C World!n");

                                                                          /* The sleep() function causes the program  */
                                                                          /* to wait 90 seconds before ending.  This  */
                                                                          /* line is optional.                        */
                                                                          sleep(90);

                                                                         }
                                                                         

                  When you have completed entering the C program exit
                  the nano text editing session by holding down the
                  **control(Ctrl)** key and then pressing **X** , which
                  is indicated by a " **^X** " in the bottom left hand
                  corner of the nano session. Exiting a nano session
                  after editing a text file will prompt to save the
                  changes made to the text file. To save changes without
                  exiting the nano session hold down the
                  **control(Ctrl)** key and then press **O** .

   The same syntax is used to edit a file with vim

   ``vi file.txt``

   A newer version of vim (non-default) is available and accessed via
   the modulefile `vim </resources/docs/user-guide/#modules>`__ .

   .. rubric:: Building Applications
      :name: compile

   The GNU Compiler Collection (GCC) is available by default for
   compiling source code. The general syntax to compile source code and
   build an application (executable) is to type the **compile command**
   followed by the **source code file** . For example, to build an
   executable for a C program named myprogram.c the syntax would be

   ``gcc myprogram.c``

   | A successful build will generate an executable (binary) file named
     a.out
   | that can be executed (run) by typing

   ``./a.out``

   Additional information can be found in the `Programming
   Environment </resources/docs/user-guide/#compile>`__ section of the
   Campus Cluster user guide.

   .. container::
      :name: sp_easy_accordion-1694707054

      .. container:: sp-ea-one sp-easy-accordion
         :name: sp-ea-1464

         .. container:: ea-card sp-ea-single

            .. rubric:: `Build Example <javascript:void(0)>`__
               :name: build-example
               :class: ea-header

            .. container:: sp-collapse spcollapse spcollapse
               :name: collapse14640

               .. container:: ea-body

                  To build an application using the hello.c program that
                  was created in the editor example above, type

                  ``[My_NetID@cc-login1 ~]$ gcc hello.c``

                  An executable file will be created named a.out . To
                  verify that the file exists, type

                  ``[My_NetID@cc-login1 ~]$ ls -l a.out``

   .. rubric:: Batch Job Submission
      :name: submit

   The head nodes on the Campus Cluster are a shared resource for all
   users so their computational use should be limited to compiling and
   building programs, and for short non-intensive runs. Users should do
   all production work by submitting jobs to the batch system.

   To submit jobs on the Campus Cluster, users should create a **job
   script** : a plain text file that contains special lines that
   describe the resources needed for the batch job. Also contained in
   the job script are sequential commands to execute specific tasks or
   run a specific code.

   **Note:** On Wednesday, September 23, 2020, the Campus Cluster has
   completely transitioned from the **MOAB/Torque (PBS)** batch system
   to the **SLURM** batch system.

   The job script is submitted to the batch system using the ``sbatch``
   command.

   .. container::
      :name: sp_easy_accordion-1694707054

      .. container:: sp-ea-one sp-easy-accordion
         :name: sp-ea-1462

         .. container:: ea-card sp-ea-single

            .. rubric:: `Job Submission Example <javascript:void(0)>`__
               :name: job-submission-example
               :class: ea-header

            .. container:: sp-collapse spcollapse spcollapse
               :name: collapse14620

               .. container:: ea-body

                  .. rubric:: Job Script Creation
                     :name: job-script-creation

                  Use the nano text editor to create a job script. Type
                  the following

                  ``[My_NetID@cc-logn1 ~]$ nano myjob.sbatch``

                  to open a blank text file named myjob.sbatch . Type
                  the job script exactly as it is shown below in your
                  nano text editing session.

                  ::

                     #!/bin/bash
                                                                         #
                                                                         #SBATCH --time=00:05:00
                                                                         #SBATCH --nodes=1
                                                                         #SBATCH --ntasks-per-node=16
                                                                         #SBATCH --job-name=myjob
                                                                         #SBATCH --partition=secondary
                                                                         #SBATCH --output=myjob.o%j
                                                                         ##SBATCH --error=myjob.e%j
                                                                         ##SBATCH --mail-user=NetID@illinois.edu
                                                                         ##SBATCH --mail-type=BEGIN,END
                                                                         #
                                                                         # End of embedded SBATCH options
                                                                         #

                                                                         # Run the hello world executable (a.out)
                                                                         ./a.out
                                                                         

                  When you have completed entering the job script exit
                  the nano text editing session by holding down the
                  **control(Ctrl)** key and then pressing **X** , which
                  is indicated by a " **^X** " in the bottom left hand
                  corner of the nano session. Exiting a nano session
                  after editing a text file will prompt to save the
                  changes made to the text file. To save changes without
                  exiting the nano session hold down the
                  **control(Ctrl)** key and then press **O** .

                  .. rubric:: Job Submission
                     :name: job-submission

                  To submit a job to the batch system using the job
                  script created above, type

                  ``[My_NetID@cc-login1 ~]$ sbatch myjob.sbatch``

                  A message with a job identification number similar to
                  the one shown below is printed to the screen as
                  confirmation that the job was successfully submitted
                  to the batch system

                  ``Submitted batch job 110975``

   Additional information regarding batch job submissions and commands
   can be found in the `Running
   Jobs </resources/docs/user-guide/#jobs>`__ section of the Campus
   Cluster user guide. To try other types of beginner examples (MPI,
   OpenMP or Hybrid), please view the README.helloworld file by typing
   ``cat /projects/consult/examples/README.helloworld``

   on the command line.

   .. rubric:: Batch Commands
      :name: batch-commands

   There are a number of commands/utilities available that will report
   details about a batch job. Depending on the command used, status
   details to output of a current running job may be viewed. The numeric
   portion of the job identification ( JobID ) string or the NetID can
   be used to view details about a batch job. Some examples of the
   available commands are as follows:

   | To display the status of all jobs in the batch system owned by you:
   |  squeue -u My_NetID
   | or
   | `qstat -u My_NetID </wp-content/uploads/2017/02/qstat-u2.png>`__

   | To display details of a specific job identified by JobID :
   |  scontrol show job JobID
   | or
   | `qstat -f JobID </wp-content/uploads/2017/02/qstat-f2.png>`__

   | To remove a queued job or delete a running job identified by JobID
     :
   |  scancel JobID
   | or
   | qdel JobID

   .. rubric:: Windows Linux Compatibility
      :name: windows

   There are some issues to be aware of when transitioning between
   Windows systems and the Campus Cluster.

   -  Linux and Windows use different formats for line breaks in text
      files, which can cause problems when reading Windows Notepad
      edited files on the Campus Cluster. For the same reason, when
      reading Linux created text files in Windows, Notepad will present
      the file in a single line. We recommend using WordPad on Windows
      for editing text files when transitioning between Windows systems
      and the Campus Cluster.
   -  Unlike Windows (and also Mac OS X), Linux file and directory
      (folder) names are case sensitive.
   -  We recommend avoiding spaces in file or directory names on Linux
      since it can cause problems. An option is to use a character such
      as “\_” or “.” in place of the space in the file name before
      transferring to the Campus Cluster. If you do have spaces in your
      file names, see
      `Spaces and special characters in a file
      name <https://linoxide.com/how-tos/manage-spaces-special-characters-file/>`__
      for how to deal with them.

.. container::

   .. container:: footer-widgets

      .. container:: row

         .. container:: col-sm-12 col-md-6

            .. container:: widget widget_text
               :name: text-3

               .. container:: widget-content

                  .. container:: widget-before-title

                     .. container:: widget-title-background

                     .. rubric:: Contact Us
                        :name: contact-us
                        :class: widget-title

                  .. container:: textwidget

                     | |University of Illinois homepage| Contact
                       `help <mailto:help@campuscluster.illinois.edu>`__
                       with questions regarding this page. All rights
                       reserved.
                     | ©2021 Board of Trustees of the University of
                       Illinois.

                     About Cookies

   .. container:: row

      .. container:: col custom-footer

`  <#>`__

.. |CC Diagram| image:: /wp-content/uploads/2020/12/cc-diagram2.png
   :width: 100.0%
.. |Windows GUI| image:: /wp-content/uploads/2017/02/win_gui2.png
.. |Linux CLI| image:: /wp-content/uploads/2017/02/linux_cli2.png
.. |Bitvise Tunnelier SFTP GUI| image:: /wp-content/uploads/2017/02/tnlr-win7.png
.. |SSH Secure Shell SFTP GUI| image:: /wp-content/uploads/2017/02/ssh-win7.png
.. |University of Illinois homepage| image:: /wp-content/uploads/2017/12/logo_uiuc_blocki_blue_ui150.png
   :class: footer_logo
   :target: http://illinois.edu/
